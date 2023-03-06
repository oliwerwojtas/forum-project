import React, { useState } from "react";

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
    <div>
      <ul className="pagination">
        <li className={currentPage === 1 ? "disabled" : ""}>
          <a onClick={handlePrev} href="#!">
            Prev
          </a>
        </li>

        <li className={currentPage === pageNumbers.length ? "disabled" : ""}>
          <a onClick={handleNext} href="#!">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
