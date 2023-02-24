import { Box, Typography } from "@mui/material";
import { Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Container sx={{ backgroundColor: "#f1f1f173", mt: "6rem", py: "1rem" }}>
      <Box>
        <Grid2 container justifyContent={"center"}>
          <Typography variant="body2" sx={{ color: "#ddd" }} align="center">
            {t("Copyright © ")}
            {new Date().getFullYear()}
          </Typography>
        </Grid2>
      </Box>
    </Container>
  );
};

export default Footer;
