import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import Logo from "../assets/logo.svg";
import { useAuthContext } from "../hooks/useAuthContext";
import "./MainNavigation.css";
import Avatar from "./Avatar";

const MainNavigation = () => {
  const { logout, error, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className="w-full py-8 px-0 box-border navbar bg-white text-lg">
      <ul className="flex justify-end items-center px-4">
        <li className="flex items-center logo">
          <img className="img" src={Logo} alt="project logo" />
          <span>ForumApp</span>
        </li>

        <li>
          {!user && (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "font-bold border-b-2 border-blue-500" : undefined
              }
            >
              Login
            </NavLink>
          )}
          {user && (
            <div className="flex">
              <Avatar src={user.photoURL} />
              <p>Hey {user.displayName}</p>
            </div>
          )}
        </li>
        <li>
          {!user && (
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? "font-bold border-b-2 border-blue-500" : undefined
              }
            >
              Signup
            </NavLink>
          )}
          {user && <NavLink to="/"></NavLink>}
        </li>
        <li>{user && <button onClick={logout}>Loging out...</button>}</li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
