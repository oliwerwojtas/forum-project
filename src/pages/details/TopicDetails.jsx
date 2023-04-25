import Avatar from "../../components/Avatar";
import { useFirestore } from "../../hooks/useFirestore";
import { Link } from "react-router-dom";
import Button from "../../utilities/Button";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
const TopicDetails = ({ topic, createdBy }) => {
  const navigate = useNavigate();
  const { deleteDocument } = useFirestore("projects");
  const { user } = useAuthContext();
  const handleClick = () => {
    const confirmed = window.confirm("Are you sure you want to delete this project?");
    if (confirmed) {
      deleteDocument(topic.id);
      navigate("/");
    }
  };
  const topicDetails = [
    { title: "Name", content: topic.name },
    { title: "Date", content: topic.date.toDate().toLocaleDateString() },
    { title: "Details", content: topic.details },
  ];

  return (
    <div className="lg: flex flex-col justify-around min-w-[50%] h-96 px-2 py-2 bg-white mb-4 rounded dark:bg-[#777a92]">
      <div className="flex justify-around">
        <h2 className="font-bold mb-4 ">Topic Details</h2>
        <p>Date: {topic.date.toDate().toLocaleDateString()}</p>
      </div>
      <div className="flex justify-around">
        <p className="">{topic.name}</p>
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
          ></Button>
        )}
      </div>
    </div>
  );
};

export default TopicDetails;
