import { useAuthContext } from "../hooks/useAuthContext";
import Login from "./login/Login";
const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();

  if (!user) {
    return <Login />;
  }

  return children;
};

export default ProtectedRoute;
