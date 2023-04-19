import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import Logo from "../assets/logo.svg";
import { useAuthContext } from "../hooks/useAuthContext";
import Avatar from "./Avatar";
import { ThemeSwitcher } from "../utilities/ThemeToggle";
import Button from "../utilities/Button";
import ErrorPage from "../utilities/ErrorPage";

const MainNavigation = () => {
  const { logout, error } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className="w-full py-6 px-0 box-border navbar bg-white text-lg dark:bg-[#777a92]">
      <ul className="flex justify-end items-center px-4">
        <li className="flex items-center mr-auto font-bold">
          <span>TalkTogether</span>
          <img className="w-9" src={Logo} alt="project logo" />
        </li>
        <li className="mr-2">
          <ThemeSwitcher />
        </li>
        <li>
          {!user ? (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold border-b-2 black mr-2 dark:text-[white]"
                    : "dark:text-[white]"
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold border-b-2 black ml-2 dark:text-[white]"
                    : "dark:text-[white]"
                }
              >
                Signup
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
