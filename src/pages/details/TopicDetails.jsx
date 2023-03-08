import Avatar from "../../components/Avatar";
import { useFirestore } from "../../hooks/useFirestore";
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
    <div>
      {topicDetails.map((detail) => (
        <div key={detail.title}>
          <h1 className="text-2xl font-bold">{detail.title}</h1>
          <p>{detail.content}</p>
        </div>
      ))}
      <h2 className="font-bold">Assigned Users:</h2>
      {topic.assignedUsersList.map((user) => (
        <div key={user.id}>
          <Avatar src={user.photoURL} />
        </div>
      ))}
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
};

export default TopicDetails;
