import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { login } from "../../redux/AuthReducer/auth_reducer";
import { useTranslation } from "react-i18next";
import { FormSignIn } from "./FormSignIn";

const SignIn = () => {
  //start
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  //validation
  const [validation, setValidation] = useState({ name: "" });
  //form data field
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  //send
  const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //clean validation
    setValidation({ name: "" });
    //check is correct user
    if (name === "admin" && password === "12345") {
      dispatch(login(name, password));
      return navigate("/profile");
    } else {
      setValidation({
        ...validation,
        name: t("error_name_password"),
      });
    }
  };
  //return
  return (
    <Container>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" sx={{ mb: 3 }} variant="h5">
          {t("Sign in")}
        </Typography>
        {/*     form */}
        <FormSignIn
          setPassword={setPassword}
          onHandleSubmit={onHandleSubmit}
          name={name}
          setName={setName}
          password={password}
        />
      </Box>
      {/*   message error */}
      {validation.name.length > 0 && (
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ color: "#e53935", mt: 3 }}>
            {validation.name}
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default SignIn;
