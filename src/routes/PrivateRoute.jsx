import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";
import { toast } from 'react-hot-toast';

const PrivateRoute = ({ component: Component, redirectTo = '/'  }) => {

   const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;

};
export default PrivateRoute;