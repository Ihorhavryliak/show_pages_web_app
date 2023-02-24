import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { getUser } from "./redux/AuthReducer/auth_reducer";
import { AppDispatch } from "./redux/store";
import { Routers } from "./Routers";
import "./style/main.css";
import { Button } from "@mui/material";

export default function App() {
  /* start */
  const dispatch: AppDispatch = useDispatch();
  const location = useLocation();
  //get data
  useEffect(() => {
    dispatch(getUser());
    return () => {};
  }, [location.pathname]);

  /*   return */
  return (
    <>
      <Header />
      {/* Routers */}
      <Routers />
      <Footer />
    </>
  );
}
