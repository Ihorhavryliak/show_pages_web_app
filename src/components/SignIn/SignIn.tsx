import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { textAlign } from "@mui/system";


const SignIn = () => {
  const navigate = useNavigate()
  //validation
  const [validation, setValidation] = useState({ name: "" });
  //form data field
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  //send
  const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(name === 'admin' && password === '12345'){
      return navigate('/profile')
    } else {
      setValidation({...validation, name: `Username or password entered incorrectly.`}) 
    }
    
  };
  //return
  return (
    <Container  >
     
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
        <Typography component="h1" sx={{mb: 3}} variant="h5">
          Sign in
        </Typography>
        {/*     form */}
        <form onSubmit={onHandleSubmit} >
          {/*    name */}
          <Box>
            <Input
            value={name}
            onChange={(e)=>setName(e.target.value)}
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
                 onChange={(e)=>setPassword(e.target.value)}
            type="password" sx={{ mb: 3 }} />
          </Box>
          
       {/*  button */}
       <Box sx={{textAlign: 'center'}}>

  
          <Button type="submit"  variant="contained">Sigh in</Button>
          </Box>
        </form>
      
      </Box>
          {/*   message error */}
    {validation.name.length > 0 && 
    <Box sx={{textAlign: 'center'}}>
 <Typography sx={{color: "#e53935", mt: 3}}>{validation.name}</Typography>
    </Box>
         
        }
    </Container>
  );
};

export default SignIn;
