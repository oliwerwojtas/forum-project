import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-tailwind/react";
import Button from "../utilities/Button";
const Sorting = ({ topics }) => {
  const [sortingOrder, setSortingOrder] = useState("asc");

  const handleSorting = () => {
    if (sortingOrder === "asc") {
      setSortingOrder("desc");
    } else {
      setSortingOrder("asc");
    }
  };

  const sortedTopics = [...topics].sort((a, b) => {
    const dateA = a.date.toDate();
    const dateB = b.date.toDate();
    return sortingOrder === "asc" ? dateA - dateB : dateB - dateA;
  });
  return (
    <>
      <Button text="Sort" onClick={handleSorting}>
        Sort by Date
      </Button>
      {sortedTopics.map((topic) => (
        <div className="border-2 mb-2 lg:w-1/5 h-36" key={topic.id}>
          <Link to={`/details/${topic.id}`}>
            <div className="flex flex-row items-center mb-2 justify-between">
              <div>
                <h4 className="text-lg font-medium">{topic.name}</h4>
              </div>
              <div>
                <p className="text-gray-500 text-sm ml-2 ">
                  Date: {topic.date.toDate().toDateString()}
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <ul className="flex flex-row">
                {topic.assignedUsersList.map((user) => (
                  <li key={user.photoURL} className="mr-2">
                    <Avatar src={user.photoURL} />
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};
export default Sorting;
