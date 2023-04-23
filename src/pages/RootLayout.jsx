import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Sidebar from "../components/Menu";
import UsersOnline from "../components/UsersOnline";
import { useAuthContext } from "../hooks/useAuthContext";
import { motion } from "framer-motion";
import { useState } from "react";

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
            {user && <Sidebar handleSort={handleSort} />}

            <Outlet context={[sortingOrder, setSortingOrder]} />
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default RootLayout;
