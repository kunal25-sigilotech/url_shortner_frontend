import { Box, Button, Link, Stack, Typography } from "@mui/material";

function AppNavigation() {
  return (
    <Box
      component="nav"
      width="100%"
      maxWidth="1280px"
      bgcolor="red"
      marginInline="auto"
      display="grid"
      gridTemplateColumns="min-content 1fr"
      alignItems="center"
      gap="16px"
      p={3}
      sx={{ boxSizing: "border-box" }}
    >
      <Typography variant="h4" component="h1">
        Shortly
      </Typography>
      <Stack
        bgcolor="yellow"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack
          component="ul"
          direction="row"
          spacing={3}
          sx={{ listStyle: "none", margin: 0, padding: 0 }}
        >
          <Box component="li" sx={{ textDecoration: "none" }}>
            <Link
              href="#"
              color="inherit"
              sx={{ textDecoration: "none", fontWeight: 600 }}
            >
              Features
            </Link>
          </Box>
          <Box component="li">
            <Link
              href="#"
              color="inherit"
              sx={{ textDecoration: "none", fontWeight: 600 }}
            >
              Pricing
            </Link>
          </Box>
          <Box component="li">
            <Link
              href="#"
              color="inherit"
              sx={{ textDecoration: "none", fontWeight: 600 }}
            >
              Resources
            </Link>
          </Box>
        </Stack>
        <Stack direction="row" spacing="10px" sx={{ margin: 0, padding: 0 }}>
          <Button
            variant="text"
            sx={{ fontWeight: 600, textTransform: "none" }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            disableElevation
            sx={{
              backgroundColor: "#26c6da",
              borderRadius: "40px",
              textTransform: "none",
            }}
          >
            Sign up
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default AppNavigation;
