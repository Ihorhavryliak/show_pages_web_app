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
    <Container sx={{ background: "#eee" }}>
      <Box>
        {/* name */}
        <Typography variant="h4" component="h1" gutterBottom>
          Web Show Pages
        </Typography>
        <Box></Box>
      </Box>
    </Container>
  );
};

export default Home;
