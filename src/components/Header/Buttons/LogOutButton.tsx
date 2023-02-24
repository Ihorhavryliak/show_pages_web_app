import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export const LogOutButton = (props: LogOutButtonType) => {
  const { onLogOut } = props;
  const { t } = useTranslation();
  return (
    <>
      <Button onClick={() => onLogOut()} variant="outlined">
        {t("Log out")}
      </Button>
    </>
  );
};

type LogOutButtonType = {
  onLogOut: () => void;
};
