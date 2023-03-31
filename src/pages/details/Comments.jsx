import { useState } from "react";
import Pagination from "./Pagination";
import Avatar from "../../components/Avatar";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import Button from "../../utilities/Button";
import Wrapper from "../../utilities/Wrapper";

const Comments = ({ topic }) => {
  const [comment, setComment] = useState();
  const [numComments, setNumComments] = useState(topic.comments.length);
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

    await updateDocument(topic.id, {
      comments: [...topic.comments, newComment],
    });
    setNumComments(numComments + 1);
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
    <div className="lg:flex flex-col w-96 h-96 bg-slate-500 justify-between">
      <h4 className="text-2xl font-bold mb-4">Comments:</h4>

      {currentComments.map((comment) => (
        <div key={comment.id} className="flex flex-row items-center mb-2">
          <Avatar src={comment.photoURL} className="mr-2" />
          {/* <p>{comment.displayName}</p> */}
          <p>{comment.content}</p>
        </div>
      ))}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={topic.comments.length}
        paginate={paginate}
      />
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          <span className="font-bold">Add new comment:</span>
          <textarea
            placeholder="here"
            required
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            className="block w-full border-gray-400 border rounded py-2 px-3 mt-1"
          ></textarea>
        </label>
        <Button text="Add comment" />
        {numComments}
      </form>
    </div>
  );
};

export default Comments;
