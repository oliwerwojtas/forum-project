import { useState } from "react";
import Avatar from "../../components/Avatar";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
const Comments = ({ topic }) => {
  const [comment, setComment] = useState();
  const { user } = useAuthContext();
  const { updateDocument, response } = useFirestore("projects");

  const DEFAULT_COMMENT = {
    displayName: user.displayName,
    photoURL: user.photoURL,
    content: "",
    id: "",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      ...DEFAULT_COMMENT,
      content: comment,
      id: Math.random(),
    };
    console.log(topic.comments);
    await updateDocument(topic.id, {
      comments: [...topic.comments, newComment],
    });

    if (!response.error) {
      setComment("");
    }
  };
  return (
    <div>
      <h4>Comments:</h4>
      {/* {tu musi się to wywołać} */}
      {topic.comments.map((comment) => (
        <li key={comment.id}>
          <p>{comment.displayName}</p>
          <Avatar src={comment.photoURL} />
        </li>
      ))}
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
