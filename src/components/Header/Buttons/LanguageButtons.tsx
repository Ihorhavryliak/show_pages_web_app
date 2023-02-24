import { Button } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const LanguageButtons = (props: LanguageButtonType) => {
  const { onChangeLanguage } = props;
  return (
    <Grid2 xs="auto" justifyContent={"end"}>
      <Button onClick={() => onChangeLanguage("en")}>en</Button>
      <Button onClick={() => onChangeLanguage("ua")}>ua</Button>
    </Grid2>
  );
};

type LanguageButtonType = {
  onChangeLanguage: (language: string) => void;
};
