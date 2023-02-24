import Container from "@mui/material/Container";
import {
  Box,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Box>
        {/* name */}
        <Typography variant="h3" component="h1" gutterBottom>
          {t("Main page")}
        </Typography>
        <Box> {t("soon_information")}</Box>
      </Box>
    </Container>
  );
};

export default Home;
