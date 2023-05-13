import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
//components
import Avatar from "../../components/Avatar";
import Button from "../../utilities/Button";
//utilities
import { Link } from "react-router-dom";

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

  return (
    <div className="lg: flex flex-col justify-around min-w-[50%] h-96 px-2 py-2 bg-white mb-2 rounded dark:bg-[#777a92]">
      <div className="flex justify-around">
        <h2 className="font-bold mb-4 w-full break-words sm:text-sm" title={topic.name}>
          {topic.name}
        </h2>
        {/* <p>Date: {topic.date.toDate().toLocaleDateString()}</p> */}
      </div>
      <div className="flex justify-around">
        <p className="dark:text-white w-full break-words sm:text-sm">{topic.details}</p>
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
