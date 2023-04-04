import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";

const Sorting = ({ topics, sortingOrder }) => {
  const sortedTopics = [...topics].sort((a, b) => {
    const dateA = a.date.toDate();
    const dateB = b.date.toDate();
    return sortingOrder === "asc" ? dateA - dateB : dateB - dateA;
  });
  return (
    <>
      {sortedTopics.map((topic) => (
        <div
          className="flex flex-col border-2 mb-2 lg:min-w-[20%] h-36 px-2 py-2 rounded"
          key={topic.id}
        >
          <Link to={`/details/${topic.id}`}>
            <div className="flex flex-col gap-8">
              <div className="flex items-center mb-2 justify-between">
                <div>
                  <h4 className="text-lg font-medium">{topic.name}</h4>
                </div>
                <div>
                  <p className="text-gray-500 text-sm ml-2 ">
                    Date: {topic.date.toDate().toDateString()}
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
        </div>
      ))}
    </>
  );
};
<div id="1">
  <div id="2"></div>
  <div id="3"></div>
</div>;
export default Sorting;
