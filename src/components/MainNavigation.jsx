import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <header className="">
      <nav className="">
        <ul className="flex justify-between items-center bg-blue-100">
          <li className="flex items-center bg-blue-700">
            <img src={Logo} alt="project logo" className="h-12 w-12" />
            <span>Managment Project</span>
          </li>

          <li className="bg-sky-500">
            <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : undefined)}>
              Login
            </NavLink>
          </li>
          <li className="bg-emerald-500">
            <NavLink to="/signup" className={({ isActive }) => (isActive ? "active" : undefined)}>
              Signup
            </NavLink>
          </li>
          <li className="bg-amber-500">
            <button className="btn">Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
