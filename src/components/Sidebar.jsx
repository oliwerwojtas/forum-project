import { NavLink } from "react-router-dom";
import { useState } from "react";
import Modal from "../utilities/Modal";
import ReactModal from "react-modal";
import Button from "../utilities/Button";
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
            <Button text="Home" />
          </NavLink>
        </li>
        <li>
          <Button text="Create" onClick={handleClick} />

          <Modal isOpen={isOpen} handleClose={handleClose} />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
