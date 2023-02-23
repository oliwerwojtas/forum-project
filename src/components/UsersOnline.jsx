import { useCollection } from "../hooks/useCollection";
import Avatar from "./Avatar";

const UsersOnline = () => {
  const { error, documents } = useCollection("users");
  return (
    <div>
      <h2>All users</h2>
      {error && <div>{error}</div>}
      {documents &&
        documents.map((user) => (
          <div key={user.id}>
            {user.online && <span>online - </span>}
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
          </div>
        ))}
    </div>
  );
};

export default UsersOnline;
