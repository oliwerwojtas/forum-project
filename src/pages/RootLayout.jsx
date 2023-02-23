import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Sidebar from "../components/Sidebar";
import UsersOnline from "../components/UsersOnline";
import { useAuthContext } from "../hooks/useAuthContext";
import "./RootLayout.css";
const RootLayout = () => {
  const { user } = useAuthContext();

  return (
    <>
      <div className="container">
        <div className="sidebar">{user && <Sidebar />}</div>
        <div className="main">
          <MainNavigation />
          <main>
            <Outlet />
          </main>
        </div>
        <div className="users"> {user && <UsersOnline />}</div>
      </div>
    </>
  );
};

export default RootLayout;
