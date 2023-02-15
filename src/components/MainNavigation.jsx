import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

import "./MainNavigation.css";

const MainNavigation = () => {
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
          <button className="btn">Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
