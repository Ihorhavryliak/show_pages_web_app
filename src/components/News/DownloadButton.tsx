import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useTranslation } from "react-i18next";




export const DownloadButton = (props: DownButtonType) => {
  const { onGetPost, postNumber } = props;
  const { t } = useTranslation();
  return (
    <Box sx={{ textAlign: "center", mt: 2 }}>
      <Button
        variant="outlined"
        size="medium"
        onClick={() => onGetPost(postNumber + 1)}
      >
        {t("Download yet")}
      </Button>
    </Box>
  );
};
type DownButtonType = {
  onGetPost: (number: number) => void;
  postNumber: number;
};
