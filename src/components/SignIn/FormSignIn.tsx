import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Input } from "@mui/material";
import { useTranslation } from "react-i18next";

export const FormSignIn = (props: FormSignInType) => {
  const { onHandleSubmit, name, setName, password, setPassword } = props;
  const { t } = useTranslation();
  return (
    <form onSubmit={onHandleSubmit}>
      {/*    name */}
      <Box>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          type="text"
          required
          sx={{ mb: 3 }}
        />
      </Box>
      {/*  password */}
      <Box>
        <Input
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          sx={{ mb: 3 }}
        />
      </Box>
      {/*  button */}
      <Box sx={{ textAlign: "center" }}>
        <Button type="submit" variant="contained">
          {t("Sign in")}
        </Button>
      </Box>
    </form>
  );
};

type FormSignInType = {
  setPassword: (password: string) => void;
  onHandleSubmit: (even: any) => void;
  name: string;
  setName: (name: string) => void;
  password: string;
};
