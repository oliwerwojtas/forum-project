import Avatar from "../components/Avatar";
//utilities
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Sorting = ({ topics, sortingOrder }) => {
  const sortedTopics = [...topics].sort((a, b) => {
    const dateA = a.date.toDate();
    const dateB = b.date.toDate();
    return sortingOrder === "asc" ? dateA - dateB : dateB - dateA;
  });
  return (
    <>
      {sortedTopics.map((topic) => (
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          layout
          className="flex flex-col mb-2 lg:min-w-[22rem] h-36 px-2 py-2 bg-white dark:bg-[#777a92] rounded-md"
          key={topic.id}
        >
          <Link to={`/details/${topic.id}`}>
            <div className="flex flex-col gap-8">
              <div className="flex items-center mb-2 justify-between">
                <div>
                  <h4 className="font-medium truncate" title={topic.name}>
                    {topic.name.length > 20 ? topic.name.slice(0, 20) + "..." : topic.name}
                  </h4>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-[white] text-sm ml-2 ">
                    {topic.date.toDate().toDateString()}
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center mb-2 justify-between">
                <ul className="flex flex-row">
                  {topic.assignedUsersList.map((user) => (
                    <li key={user.photoURL} className="mr-2">
                      <Avatar src={user.photoURL} />
                    </li>
                  ))}
                </ul>
                <div>Comments({topic.comments.length})</div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </>
  );
};

export default Sorting;
