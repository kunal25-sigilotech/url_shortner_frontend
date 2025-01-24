import { useState } from "react";
import { Box, createTheme, ThemeProvider } from "@mui/material";

import URLForm from "./components/URLForm";
import AppNavigation from "./components/AppNavigation";
import Hero from "./components/Hero";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

function App() {
  const [value, setValue] = useState("");
  const [shortenedURL, setShortenedURL] = useState(null);
  const [error, setError] = useState("");
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Box component="header" margin={0} padding={0}>
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
    </ThemeProvider>
  );
}

export default App;
