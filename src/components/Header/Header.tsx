import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Container } from "@mui/system";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/AuthReducer/auth_reducer";
import { getUserDataSelector } from "../../redux/AuthReducer/auth_selector";
import { AppDispatch } from "../../redux/store";
import { LanguageButtons } from "./Buttons/LanguageButtons";
import { Links } from "./Links";
import { Logo } from "./Logo";
import { LogOutButton } from "./Buttons/LogOutButton";
import { SignInButton } from "./Buttons/SignInButton";

const Header = () => {
  /* start */
  //translate
  const { i18n } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const navigation = useNavigate();
  const dataUser = useSelector(getUserDataSelector);
  //redirect on sign in page
  const onRedirectSighIn = () => {
    return navigation("/sigh-in");
  };
  //log out
  const onLogOut = () => {
    dispatch(logOut());
    return navigation("/");
  };

  const onChangeLanguage = (language: string) => {
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
          <Logo />
          {/* links */}
          <Links />
          {/*  language buttons */}
          <LanguageButtons onChangeLanguage={onChangeLanguage} />
          {/* log out button / email */}
          {dataUser.length > 0 ? (
            <Grid2 xs="auto" justifyContent={"end"}>
              <Box>
                <Typography variant="caption" sx={{ mr: 2 }}>
                  {dataUser[0].email}
                </Typography>
                {/* button */}
                <LogOutButton onLogOut={onLogOut} />
              </Box>
            </Grid2>
          ) : (
            /* button */
            <SignInButton onRedirectSighIn={onRedirectSighIn} />
          )}
        </Grid2>
      </Box>
    </Container>
  );
};

export default Header;
