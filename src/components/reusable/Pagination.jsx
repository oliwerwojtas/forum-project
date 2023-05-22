import { useState } from "react";
//components
import Button from "./Button";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      paginate(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
      paginate(currentPage + 1);
    }
  };

  return (
    <div className="">
      <ul className="flex gap-2">
        <li className={currentPage === 1 ? "disabled" : ""}>
          <Button text="Prev" onClick={handlePrev} href="#!">
            Prev
          </Button>
        </li>

        <li className={currentPage === pageNumbers.length ? "disabled" : ""}>
          <Button text="Next" onClick={handleNext} href="#!"></Button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
