import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";


export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
         {/*  <Route path="sign-up">
            <Route index element={<Register />}></Route>
          </Route>
          <Route path="sign-in">
            <Route index element={<SighIn />}></Route>
          </Route> */}
        </Route>
      </Routes>
    </>
  );
};
