
import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Container } from "@mui/system";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserDataSelector } from "../../redux/AuthReducer/auth_selector";

const Profile = () => {
  /* start */
  const navigate = useNavigate()
  //get data user
  const userData = useSelector(getUserDataSelector);
  //redirect
  useEffect(() => {
    if(userData.length === 0) {
      return navigate('/')
    }
  }, [])
  
  
  //return
  if(userData.length === 0) {
   return(<></>) 
  }else{
  return (
    <Container>
      <Box>
        <Grid2>
        <Typography variant="h1"  >Profile </Typography>
          <Box>
          <Typography >Hello, {userData.length > 0 && userData[0].email}! </Typography>
          </Box>
        </Grid2>
      </Box>
    </Container>
  )}
};

export default Profile;
