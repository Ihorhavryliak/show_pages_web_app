import { Button } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useTranslation } from "react-i18next";

export const SignInButton = (props: SignInButtonType) => {
  const { onRedirectSighIn } = props;
  const { t } = useTranslation();
  return (
    <Grid2 xs="auto" justifyContent={"end"}>
      <Button onClick={() => onRedirectSighIn()} variant="contained">
        {t("Sign in")}
      </Button>
    </Grid2>
  );
};
type SignInButtonType = {
  onRedirectSighIn: () => void;
};
