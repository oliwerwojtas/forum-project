import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
//components
import MainNavigation from "../components/MainNavigation";
import Sidebar from "../components/Menu";
import UsersOnline from "../components/UsersOnline";
//utilities
import { Routes, Route, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import ForgotPassword from "../pages/password/ForgotPassword";
const RootLayout = () => {
  const { user } = useAuthContext();

  const [sortingOrder, setSortingOrder] = useState("asc");

  const handleSort = () => {
    if (sortingOrder === "asc") {
      setSortingOrder("desc");
    } else {
      setSortingOrder("asc");
    }
  };

  return (
    <>
      <div>
        <MainNavigation />
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div>{user && <UsersOnline />}</div>
          <div>
            {user && (
              <div>
                <Sidebar handleSort={handleSort} />
                <Outlet context={[sortingOrder, setSortingOrder]} />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default RootLayout;
