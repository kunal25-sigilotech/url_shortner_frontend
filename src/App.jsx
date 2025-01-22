import { useState } from "react";
import URLForm from "./components/URLForm";

function App() {
  const [value, setValue] = useState("");
  const [shortenedURL, setShortenedURL] = useState(null);
  const [error, setError] = useState("");
  return (
    <div>
      <header></header>
      <main>
        <URLForm
          value={value}
          shortenedURL={shortenedURL}
          error={error}
          onSetError={setError}
          onSetValue={setValue}
          onSetShortenedURL={setShortenedURL}
        />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
