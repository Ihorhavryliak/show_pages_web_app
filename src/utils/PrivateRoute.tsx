import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import Profile from "../components/Profile/Profile";
import { getIsAuthSelector } from "../redux/AuthReducer/auth_selector";

export const PrivateRoute = () => {
  const isAuthenticated = useSelector(getIsAuthSelector);

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <Profile />;
};
