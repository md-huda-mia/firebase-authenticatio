import AuthHook from "../Hook/AuthHook";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivetRouter = ({ children }) => {
  const { user } = AuthHook();
  const location = useLocation();

  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRouter;
