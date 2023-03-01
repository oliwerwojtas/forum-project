import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
const Comments = () => {
  const [comment, setComment] = useState();
  const { user } = useAuthContext();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h4>Comments:</h4>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Add new comment:</span>
          <textarea
            placeholder="here"
            required
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          ></textarea>
        </label>
        <button>Add Comment</button>
      </form>
    </div>
  );
};

export default Comments;
