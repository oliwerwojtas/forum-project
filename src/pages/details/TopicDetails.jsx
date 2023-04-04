import Avatar from "../../components/Avatar";
import { useFirestore } from "../../hooks/useFirestore";
import { Link } from "react-router-dom";
import Button from "../../utilities/Button";

import { useAuthContext } from "../../hooks/useAuthContext";
const TopicDetails = ({ topic, createdBy }) => {
  console.log(createdBy);
  const { deleteDocument } = useFirestore("projects");
  const { user } = useAuthContext();
  const handleClick = () => {
    const confirmed = window.confirm("Are you sure you want to delete this project?");
    if (confirmed) {
      deleteDocument(topic.id);
    }
  };
  const topicDetails = [
    { title: "Name", content: topic.name },
    { title: "Date", content: topic.date.toDate().toLocaleDateString() },
    { title: "Details", content: topic.details },
  ];

  return (
    <div className="lg: flex flex-col justify-around min-w-[50%] h-96 bg-white mb-4 ">
      <h2 className="text-center">Topic Details</h2>
      <div className="flex justify-around">
        {topicDetails.map((detail) => (
          <div key={detail.title}>
            <h4 className="text-2xl font-bold mb-2">{detail.title}</h4>
            <p className="text-gray-600 mb-4">{detail.content}</p>
          </div>
        ))}
      </div>
      <div className="font-bold">Assigned Users:</div>
      <div className="flex flex-wrap">
        {topic.assignedUsersList.map((user) => (
          <div key={user.id} className="flex items-center mb-2 mr-2">
            <Avatar src={user.photoURL} className="mr-2" />
            <p>{user.name}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-around">
        <Link to="/">
          <Button text="Back" />
        </Link>
        {user.uid === createdBy && (
          <Button
            text="Delete"
            onClick={handleClick}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
          >
            DELETE
          </Button>
        )}
      </div>
    </div>
  );
};

export default TopicDetails;
