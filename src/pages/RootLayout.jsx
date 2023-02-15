import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
  return (
    <>
      <div className="flex">
        <div className="basis-1/5">
          <Sidebar />
        </div>
        <div className="basis-4/5">
          <MainNavigation />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
