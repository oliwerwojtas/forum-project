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
    <nav className="w-full py-8 px-0 box-border navbar">
      <ul className="flex justify-end items-center">
        <li className="flex items-center logo">
          <img className="img" src={Logo} alt="project logo" />
          <span>Managment Project</span>
        </li>

        <li>
          {!user && <NavLink to="/login">Login </NavLink>}
          {user && (
            <div className="flex">
              <Avatar src={user.photoURL} />
              <p>Hey {user.displayName}</p>
            </div>
          )}
        </li>
        <li>
          {!user && <NavLink to="/signup">Signup</NavLink>}
          {user && <NavLink to="/"></NavLink>}
        </li>
        <li>{user && <button onClick={logout}>Loging out...</button>}</li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
