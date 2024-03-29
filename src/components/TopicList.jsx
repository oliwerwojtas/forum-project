import { useState } from "react";
//components
import Sorting from "../components/Sorting";
import Pagination from "../components/reusable/Pagination";
//utilities
import { motion } from "framer-motion";

const TopicList = ({ topics, sortingOrder }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentTopics = topics.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-[#e4e5f1] dark:bg-[#25273c] min-h-full sm:w-11/12  shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-center font-bold text-xl mb-2 dark:text-[white]">Lets talk about...</h2>

        {topics.length === 0 && <p className="dark:text-[white] mb-2">No topics!</p>}

        <motion.div layout className="lg:flex gap-2 flex-wrap justify-center">
          <Sorting topics={currentTopics} sortingOrder={sortingOrder} />
        </motion.div>
        <div className="mt-2">
          <Pagination postsPerPage={postsPerPage} totalPosts={topics.length} paginate={paginate} />
        </div>
      </div>
    </div>
  );
};

export default TopicList;
