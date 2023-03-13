import { NavLink } from "react-router-dom";
import Icon from "../assets/dashboard.svg";

const Sidebar = () => {
  return (
    <div className="px-6 mt-2">
      <ul className="flex justify-start">
        <li className="mr-2">
          <NavLink exact to="/">
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              <span>Details</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/create">
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              <span>New text</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
