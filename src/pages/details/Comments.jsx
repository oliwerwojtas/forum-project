import { useState } from "react";
import Pagination from "./Pagination";
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

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);
  const indexLastPost = currentPage * postsPerPage;
  const indexFirstPost = indexLastPost - postsPerPage;
  const currentComments = topic.comments.slice(indexFirstPost, indexLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h4>Comments:</h4>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={topic.comments.length}
        paginate={paginate}
      />
      {currentComments.map((comment) => (
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
