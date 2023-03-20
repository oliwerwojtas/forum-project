import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="px-6 mt-2">
      <ul className="flex justify-start">
        <li className="mr-2">
          <NavLink to="/">
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              <span>Home</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/create">
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              <span>Create</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
