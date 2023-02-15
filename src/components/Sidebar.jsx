import { NavLink } from "react-router-dom";
import Icon from "../assets/dashboard.svg";
const Sidebar = () => {
  return (
    <div className=" bg-sky-500 h-[100vh]">
      <div className="">
        <div>
          <p>Hey user</p>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                <img src={Icon} alt="dashboard" className="w-6 h-6" />
                <span>Dashboard</span>
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
    </div>
  );
};

export default Sidebar;
