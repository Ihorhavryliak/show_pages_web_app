import { Button, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Container } from "@mui/system";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();

  //redirect on sigh in page
  const onRedirectSighIn = () => {
    return navigation("/sigh-in");
  };

  return (
    <Container sx={{ background: "#ddd" }}>
      <Box>
        <Grid2
          container
          spacing={2}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ mb: "0", py: "1rem" }}
        >
          {/* logo */}
          <Grid2 xs="auto">
            <Typography variant="h5" component="h1">
              Show Pages App
            </Typography>
          </Grid2>
          {/* links */}
          <Grid2 container xs={5} spacing={2} sx={{ fontSize: "1.2rem" }}>
            <Grid2>
              <NavLink className="text__decoration" to={"/"}>
                Home
              </NavLink>
            </Grid2>
            <Grid2>
              <NavLink className="text__decoration" to={"/news"}>
                News
              </NavLink>
            </Grid2>
            <Grid2>
              <NavLink className="text__decoration" to={"/profile"}>
                Profile
              </NavLink>
            </Grid2>
          </Grid2>
          {/* button */}
          <Grid2 xs="auto" justifyContent={"end"}>
            <Button onClick={() => onRedirectSighIn()} variant="contained">
              Sigh in
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
};

export default Header;
