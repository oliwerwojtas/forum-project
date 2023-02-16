import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import Logo from "../assets/logo.svg";

import "./MainNavigation.css";

const MainNavigation = () => {
  const { logout, error, isPending } = useLogout();

  return (
    <nav className="w-full py-8 px-0 box-border navbar">
      <ul className="flex justify-end items-center">
        <li className="flex items-center logo">
          <img className="img" src={Logo} alt="project logo" />
          <span>Managment Project</span>
        </li>

        <li>
          <NavLink to="/login">Login </NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
        <li>
          <button className="btn" onClick={logout}>
            Loging out...
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
