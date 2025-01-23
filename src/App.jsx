import { useState } from "react";
import URLForm from "./components/URLForm";
import AppNavigation from "./components/AppNavigation";
import { Box } from "@mui/material";
import Hero from "./components/Hero";

function App() {
  const [value, setValue] = useState("");
  const [shortenedURL, setShortenedURL] = useState(null);
  const [error, setError] = useState("");
  return (
    <div>
      <Box component="header" margin={0} padding={0} bgcolor="yellow">
        <AppNavigation />
      </Box>
      <main>
        <Hero />
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
