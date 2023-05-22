import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
//components
import Avatar from "./Avatar";
import ThemeSwitcher from "../components/reusable/ThemeToggle";
import Button from "../components/reusable/Button";
import ErrorPage from "../components/reusable/ErrorPage";
//utilities
import Logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  const { logout, error } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className="w-full py-6 px-0 box-border sticky top-0 z-20 bg-white text-lg dark:bg-[#777a92] ">
      <ul className="flex justify-end items-center px-4">
        <li className="flex items-center mr-auto font-bold">
          <span>TalkTogether</span>
          <img className="w-9" src={Logo} alt="project logo" />
        </li>
        <li className="mr-2">
          <ThemeSwitcher />
        </li>
        <li className="flex gap-2">
          {!user ? (
            <>
              <NavLink to="/login" className="relative group dark:text-white">
                Login
                <div className="absolute w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform dark:bg-white"></div>
              </NavLink>

              <NavLink to="/signup" className="relative group dark:text-white">
                Sign up
                <div className="absolute w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform dark:bg-white/80"></div>
              </NavLink>
            </>
          ) : (
            <div className="flex ">
              <Avatar src={user.photoURL} />
            </div>
          )}
        </li>

        <li className="text-base">{user && <Button text="Logout" onClick={logout} />}</li>
        {error && <ErrorPage message={error} />}
      </ul>
    </nav>
  );
};

export default MainNavigation;
