import { Box, Button, Stack, Typography } from "@mui/material";
import MySvg from "../../public/illustration-working.svg";

function Hero() {
  return (
    <Box
      component="section"
      width="100%"
      maxWidth="1280px"
      marginInline="auto"
      p={3}
      boxSizing="border-box"
    >
      <Stack>
        <Typography variant="h1" component="h2">
          More than just shorter links
        </Typography>
        <Typography variant="body1">
          Build your brand's recognition and get detailed insight on how your
          links are performing
        </Typography>
        <Button variant="contained" sx={{ alignSelf: "start" }}>
          Get started
        </Button>
      </Stack>
    </Box>
  );
}
export default Hero;
