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

const Home = () => {

  return (
    <Container >
      <Box>
        {/* name */}
        <Typography variant="h1" component="h1" gutterBottom>
         Main page
        </Typography>
        <Box>Soon there will be adding new information.</Box>
      </Box>
    </Container>
  );
};

export default Home;
