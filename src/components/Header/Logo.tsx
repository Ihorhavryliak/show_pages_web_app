import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Logo = () => {
  const { t } = useTranslation();
  return (
    <Grid2 xs="auto">
      <Link to="/">
        <Typography variant="h5" component="h1">
          <div>{t("Show Pages App")}</div>
        </Typography>
      </Link>
    </Grid2>
  );
};
