import Avatar from "../../components/Avatar";
const DetailsSummary = ({ topic }) => {
  return (
    <div>
      <h2>{topic.name}</h2>
      <p>{topic.date.toDate().toDateString()}</p>
      <p>{topic.details}</p>
      <h4>Users:</h4>
      {topic.assignedUsersList.map((user) => (
        <div key={user.id}>
          <Avatar src={user.photoURL} />
        </div>
      ))}
    </div>
  );
};

export default DetailsSummary;
