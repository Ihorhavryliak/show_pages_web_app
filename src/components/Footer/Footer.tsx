import { Box } from "@mui/material";
import { Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

export const Footer = () => {
  return (
    <Container sx={{ backgroundColor: "#ddd" }}>
      <Box>
        <Grid2 container xs={2}>
          Footer
        </Grid2>
      </Box>
    </Container>
  );
};
