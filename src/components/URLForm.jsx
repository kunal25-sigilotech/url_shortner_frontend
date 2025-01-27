import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { purple, teal } from "@mui/material/colors";
import { useState } from "react";
import { API_URL, API_URL_SHORT } from "../utils/endPoints";
import { validator } from "../utils/urlValidator";

export default function URLForm({
  theme,
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
    } catch {
      onSetError("Failed to shorten the link");
    }
  }

  if (error)
    return (
      <div>
        <p>{error}</p>
      </div>
    );

  return (
    <Stack
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      maxWidth="1280px"
      marginInline="auto"
      bgcolor="#f5f5f5"
      mt="100px"
      boxSizing="border-box"
      px={4}
    >
      <Stack
        width="100%"
        spacing={2}
        alignItems="center"
        maxWidth="800px"
        p={4}
        bgcolor={purple[800]}
        sx={{
          transform: "translateY(-50%)",
          borderRadius: "9px",
        }}
      >
        <Box
          component="form"
          m={0}
          p={0}
          onSubmit={handleSubmit}
          boxSizing="border-box"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            alignSelf: "stretch",
            [theme.containerQueries.down(834)]: {
              flexDirection: "column",
            },
            [theme.containerQueries.up(834)]: {
              flexDirection: "row",
            },
          }}
        >
          <TextField
            type="text"
            size="small"
            placeholder="Shorten a link here..."
            sx={{ backgroundColor: "#fff", width: "100%", maxWidth: "650px" }}
            value={value}
            onChange={(e) => onSetValue(e.target.value)}
          />
          <Button
            variant="contained"
            disableElevation
            sx={{
              backgroundColor: `${teal["A400"]}`,
              textTransform: "none",
              fontFamily: "Poppins, Arial, sans-serif",
              fontSize: "16px",
              fontWeight: 600,
            }}
            type="submit"
          >
            Shorten it!
          </Button>
        </Box>
        {shortenedURL ? (
          <Typography
            variant="subtitle2"
            alignSelf="center"
            component="p"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap="1rem"
            color="#fff"
            onClick={() => handleClick(shortenedURL.shortURL)}
          >
            <span style={{ cursor: "pointer" }}>{shortenedURL.shortURL}</span>
            <span>clicks:{clicks}</span>
            {isCopied ? <span>Copied!</span> : null}
          </Typography>
        ) : null}
      </Stack>
    </Stack>
  );
}
