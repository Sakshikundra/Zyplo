import {Navigate} from "react-router-dom";
import {UrlState} from "@/context";
import {BarLoader} from "react-spinners";

const RequireAuth = ({children}) => {
  const {user, loading} = UrlState();

  if (loading) {
    return <BarLoader width="100%" color="#36d7b7" />;
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default RequireAuth;
