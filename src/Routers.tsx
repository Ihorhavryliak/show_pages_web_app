import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import SignIn from "./components/SignIn/SignIn";
import { PrivateRoute } from "./Hoc/PrivateRoute";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="news">
            <Route index element={<News />}></Route>
          </Route>
          <Route path="profile">
            <Route index element={<PrivateRoute element={<Profile />} />} />
          </Route>
          <Route path="sigh-in">
            <Route index element={<SignIn />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};
