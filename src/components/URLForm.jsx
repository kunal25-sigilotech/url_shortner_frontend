import { useState } from "react";
import { API_URL, API_URL_SHORT } from "../utils/endPoints";
import { validator } from "../utils/urlValidator";

export default function URLForm({
  value,
  shortenedURL,
  error,
  onSetValue,
  onSetError,
  onSetShortenedURL,
}) {
  const [clicks, setClicks] = useState(0);
  const [isCopied, setIsCopied] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!value || !validator(value)) {
      alert("Invalid url");
      onSetValue("");
      return;
    }
    try {
      const res = await fetch(`${API_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ originalURL: value }),
      });
      const data = await res.json();
      onSetShortenedURL(data.url);
      setClicks(data.url.clicks);
      onSetValue("");
    } catch (error) {
      onSetError(error.message);
    }
  }

  async function handleClick(url) {
    try {
      const res = await fetch(`${API_URL_SHORT}/${url}`);
      const data = await res.json();
      setClicks(data.clicks);
      setIsCopied(true);
      navigator.clipboard.writeText(data.url);
    } catch {}
  }

  if (error)
    return (
      <div>
        <p>{error}</p>
      </div>
    );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => onSetValue(e.target.value)}
        />
        <button type="submit">Shorten it!</button>
      </form>
      {shortenedURL ? (
        <p
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
          onClick={() => handleClick(shortenedURL.shortURL)}
        >
          <span style={{ cursor: "pointer" }}>{shortenedURL.shortURL}</span>
          <span>clicks:{clicks}</span>
          {isCopied ? <span>Copied!</span> : null}
        </p>
      ) : (
        <p>Generate a new URL</p>
      )}
    </div>
  );
}
