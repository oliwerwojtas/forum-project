import { Link } from "react-router-dom";
import Avatar from "./Avatar";

const TopicList = ({ topics }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white lg:w-11/12 sm:w-80 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="title text-center font-bold text-xl mb-6">Lets talk about...</h2>

        {topics.length === 0 && <p>No topics!</p>}
        <div className="lg:flex gap-2 flex-wrap jus">
          {topics.map((topic) => (
            <div className="border-2 mb-2 lg:w-1/5">
              <Link to={`/details/${topic.id}`} key={topic.id}>
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
        </div>
      </div>
    </div>
  );
};

export default TopicList;
