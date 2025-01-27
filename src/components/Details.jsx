import { Box, Grid2, Stack, Typography } from "@mui/material";

function Details() {
  return (
    <Box component="section">
      <Typography variant="h4" component="h4">
        Advanced Statistics
      </Typography>
      <Typography>
        Track how your links are performing accorss the web with our advanced
        statistic dashboard.
      </Typography>
      <Stack component="section">
        <Grid2 container component="ul">
          <Grid2 component="li">
            <Typography variant="subtitle1">Brand Recognition</Typography>
            <Typography variant="subtitle2">
              Boost your brand recognition with each click.Generic links don't
              mean a thing. Branded links help instill confidence in your
              content.
            </Typography>
          </Grid2>
          <Grid2 component="li">
            <Typography variant="subtitle1">Detailed Records</Typography>
            <Typography variant="subtitle2">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              descions.
            </Typography>
          </Grid2>
          <Grid2 component="li">
            <Typography variant="subtitle1">Detailed Records</Typography>
            <Typography variant="subtitle2">
              Improve brand awareness and content discoverability through
              customization links, supercharging audience engagement
            </Typography>
          </Grid2>
        </Grid2>
      </Stack>
    </Box>
  );
}
