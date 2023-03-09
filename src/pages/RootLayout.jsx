import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Sidebar from "../components/Sidebar";
import UsersOnline from "../components/UsersOnline";
import { useAuthContext } from "../hooks/useAuthContext";

const RootLayout = () => {
  const { user } = useAuthContext();

  return (
    <>
      <div>
        <div>
          <MainNavigation />
          {user && <UsersOnline />}
          {user && <Sidebar />}
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
