import { NavLink } from "react-router-dom";
import Icon from "../assets/dashboard.svg";

const Sidebar = () => {
  return (
    <div className="">
      <nav>
        <ul className="flex justify-around">
          <li>
            <NavLink to="/">
              <img src={Icon} alt="dashboard" className="w-6 h-6" />
              <span>Details</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/create">
              <img src={Icon} alt="add" className="w-6 h-6" />
              <span>New text</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
