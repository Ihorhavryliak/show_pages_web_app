import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Container } from "@mui/system";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getUserDataSelector } from "../../redux/AuthReducer/auth_selector";

const Profile = () => {
  /* start */
  const { t } = useTranslation();

  //get data user
  const userData = useSelector(getUserDataSelector);

  return (
    <Container>
      <Box>
        <Grid2>
          <Typography variant="h3" component="h1" gutterBottom>
            {t("Profile")}
          </Typography>
          <Box>
            <Typography>
              {t("Hello")}, {userData.length > 0 && userData[0].email}!
            </Typography>
          </Box>
        </Grid2>
      </Box>
    </Container>
  );
};

export default Profile;
