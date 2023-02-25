import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsAuthSelector } from "../redux/AuthReducer/auth_selector";

export const PrivateRoute = ({ element }: PrivateRouteType) => {
  const isAuthenticated = useSelector(getIsAuthSelector);

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return element;
};

type PrivateRouteType = {
  element: JSX.Element;
};
