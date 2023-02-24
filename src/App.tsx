
import { Routers } from "./Routers";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import './style/main.css'

export default function App() {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
}
