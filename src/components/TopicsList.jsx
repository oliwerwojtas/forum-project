import { Link } from "react-router-dom";
import Avatar from "./Avatar";
const TopicList = ({ topics }) => {
  return (
    <div>
      {topics.length === 0 && <p>No topics!</p>}
      {topics.map((topic) => (
        <Link to={`/details/${topic.id}`} key={topic.id}>
          <h4>{topic.name}</h4>
          <p>Date: {topic.date.toDate().toDateString()}</p>
          <div>
            <ul>
              {topic.project.assignedUserList.map((user) => {
                <li key={user.photoURL}>
                  <Avatar src={user.photoURL} />
                </li>;
              })}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TopicList;
