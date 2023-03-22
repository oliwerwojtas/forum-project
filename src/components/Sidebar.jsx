import { NavLink } from "react-router-dom";
import { useState } from "react";
import Modal from "../utilities/Modal";
import ReactModal from "react-modal";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
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
          <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
          >
            Open modal
          </button>
          <Modal isOpen={isOpen} handleClose={handleClose} />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
