import Avatar from "../../components/Avatar";
import { useFirestore } from "../../hooks/useFirestore";
import { Link } from "react-router-dom";
const TopicDetails = ({ topic }) => {
  const { deleteDocument } = useFirestore("projects");

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
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white w-80 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="title text-center font-bold text-xl mb-6">Topic Details</h2>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Powrót do wyboru kategorii
        </Link>
        {topicDetails.map((detail) => (
          <div key={detail.title}>
            <h4 className="text-2xl font-bold mb-2">{detail.title}</h4>
            <p className="text-gray-600 mb-4">{detail.content}</p>
          </div>
        ))}
        <div className="font-bold">Assigned Users:</div>
        <div className="flex flex-wrap">
          {topic.assignedUsersList.map((user) => (
            <div key={user.id} className="flex items-center mb-2 mr-2">
              <Avatar src={user.photoURL} className="mr-2" />
              <p>{user.name}</p>
            </div>
          ))}
        </div>
        <button
          onClick={handleClick}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default TopicDetails;
