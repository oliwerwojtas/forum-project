import Avatar from "../../components/Avatar";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
const DetailsSummary = ({ topic }) => {
  const { deleteDocument } = useFirestore("projects");

  const { user } = useAuthContext();
  const handleClick = (e) => {
    const confirmed = window.confirm("Are you sure you want to delete this project?");
    if (confirmed) {
      deleteDocument(topic.id);
    }
  };
  return (
    <div>
      <h1 className="text-2xl font-bold">{topic.name}</h1>
      <time dateTime={topic.date.toDate()}>{topic.date.toDate().toLocaleDateString()}</time>
      <p>{topic.details}</p>
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

export default DetailsSummary;
