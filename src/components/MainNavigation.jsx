import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import Logo from "../assets/logo.svg";
import { useAuthContext } from "../hooks/useAuthContext";

import Avatar from "./Avatar";

const MainNavigation = () => {
  const { logout, error, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className="w-full py-6 px-0 box-border navbar bg-white text-lg">
      <ul className="flex justify-end items-center px-4">
        <li className="flex items-center mr-auto font-bold">
          <img className="w-9" src={Logo} alt="project logo" />
          <span>ForumApp</span>
        </li>

        <li>
          {!user ? (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "font-bold border-b-2 border-blue-500 mr-2" : undefined
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? "font-bold border-b-2 border-blue-500 ml-2" : undefined
                }
              >
                Signup
              </NavLink>
            </>
          ) : (
            <div className="flex ">
              <Avatar src={user.photoURL} />
              <div className="text-base">
                <p>Hey,</p>
                <p>{user.displayName}</p>
              </div>
            </div>
          )}
        </li>
        <li className="text-base">{user && <button onClick={logout}>Log out</button>}</li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
