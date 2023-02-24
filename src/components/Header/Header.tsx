import { Button, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Container } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { logOut } from "../../redux/AuthReducer/auth_reducer";
import { getUserDataSelector } from "../../redux/AuthReducer/auth_selector";
import { AppDispatch } from "../../redux/store";

const Header = () => {
  /* start */
  //translate
  const { t, i18n } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const navigation = useNavigate();
  const dataUser = useSelector(getUserDataSelector);;
  //redirect on sign in page
  const onRedirectSighIn = () => {
    return navigation("/sigh-in");
  };
  //log out
  const onLogOut = () => {
    dispatch(logOut());
    return navigation("/");
  };

  const omChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  //return
  return (
    <Container sx={{ borderBottom: "1px solid #ddd", mb: 3 }}>
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
            <Link to="/">
              <Typography variant="h5" component="h1">
              <div>{t("Show Pages App")}</div>      
              </Typography>
            </Link>
          </Grid2>
          {/* links */}
          <Grid2
            container
            xs={5}
            spacing={2}
            sx={{ fontSize: "1.2rem" }}
            justifyContent={"center"}
          >
            <Grid2>
              <NavLink to={"/"}>{t("Home")}</NavLink>
            </Grid2>
            <Grid2>
              <NavLink to={"/news"}>{t("News")}</NavLink>
            </Grid2>
            <Grid2>
              <NavLink to={"/profile"}>{t("Profile")}</NavLink>
            </Grid2>
          </Grid2>
          <Button onClick={() => omChangeLanguage("en")}>en</Button>
      <Button onClick={() => omChangeLanguage("ua")}>ua</Button>

          {/* log out */}
          {dataUser.length > 0 ? (
            <Grid2 xs="auto" justifyContent={"end"}>
              <Box>
                <Typography variant="caption" sx={{ mr: 2 }}>
                  {dataUser[0].email}
                </Typography>

                <Button onClick={() => onLogOut()} variant="outlined">
                  {t("Log out")}
                </Button>
              </Box>
            </Grid2>
          ) : (
            /* button */
            <Grid2 xs="auto" justifyContent={"end"}>
              <Button onClick={() => onRedirectSighIn()} variant="contained">
                {t("Sign in")}
              </Button>
            </Grid2>
          )}
        </Grid2>
      </Box>
    </Container>
  );
};

export default Header;
