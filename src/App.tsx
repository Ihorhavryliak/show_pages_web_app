import { Container } from "@mui/system";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Routers } from "./Routers";

import "./style/main.css";

export default function App() {
  return (
    <>
      <Header />
   
        <Routers />
  
      <Footer/>
    </>
  );
}
