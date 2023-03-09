import { useCollection } from "../hooks/useCollection";
import Avatar from "./Avatar";

const UsersOnline = () => {
  const { error, documents } = useCollection("users");
  return (
    <div className="flex">
      <div className="w-full flex items-center">
        <h2>All users</h2>
      </div>
      {error && <div>{error}</div>}
      {documents &&
        documents.map((user) => (
          <div className="flex flex-col justify-center " key={user.id}>
            {user.online && <span></span>}
            <div className="flex items-center justify-center">
              <Avatar className="w-12 h-12" src={user.photoURL} />
            </div>
            <span>{user.displayName}</span>
          </div>
        ))}
    </div>
  );
};

export default UsersOnline;
