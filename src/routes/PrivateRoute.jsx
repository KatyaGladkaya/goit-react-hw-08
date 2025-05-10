import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) {
    toast.error('This is private page for logged users');
    return <Navigate to='/login' />;
  }
  return children;
};
export default PrivateRoute;