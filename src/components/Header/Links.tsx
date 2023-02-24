import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export const Links = () => {
  const { t } = useTranslation();
  return (
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
  );
};
