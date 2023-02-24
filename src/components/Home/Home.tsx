import * as React from "react";
import Container from "@mui/material/Container";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RestoreIcon from "@mui/icons-material/Restore";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <Container >
      <Box>
        {/* name */}
        <Typography variant="h3" component="h1" gutterBottom>
          {t("Main page")}
        </Typography>
        <Box> {t("soon_information")}</Box>
      </Box>
    </Container>
  );
};

export default Home;
