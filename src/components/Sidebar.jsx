import { NavLink } from "react-router-dom";
import Icon from "../assets/dashboard.svg";
import { useAuthContext } from "../hooks/useAuthContext";
import Avatar from "./Avatar";

const Sidebar = () => {
  const { user } = useAuthContext();
  return (
    <div className=" bg-sky-500 h-[100vh]">
      <div className="">
        <nav>
          <ul>
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
    </div>
  );
};

export default Sidebar;
