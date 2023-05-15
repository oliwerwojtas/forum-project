import { useState } from "react";
//components
import Modal from "../utilities/Modal";
import Button from "../utilities/Button";
//utilities
import { NavLink } from "react-router-dom";
import { RiHome2Line, FiPlusCircle, RiSortAsc } from "react-icons/all";

const Sidebar = ({ handleSort }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center mb-4">
      <div className="lg:w-11/12 mt-4">
        <ul className="flex justify-start">
          <li className="mr-2">
            <NavLink to="/">
              <Button
                text="Home"
                icon={<RiHome2Line size={18} className="mr-0.5" />}
                className="flex items-center"
              />
            </NavLink>
          </li>
          <li>
            <Button
              text="Create"
              icon={<FiPlusCircle size={18} className="mr-0.5" />}
              className="flex items-center"
              onClick={handleClick}
            />

            <Modal isOpen={isOpen} handleClose={handleClose} />
          </li>

          <li className="ml-2">
            <Button
              text="Sort"
              icon={<RiSortAsc size={18} className="mr-0.5" />}
              className="flex items-center"
              onClick={handleSort}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
