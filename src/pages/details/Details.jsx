import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";

import Comments from "./Comments";
import TopicDetails from "./TopicDetails";

const Details = () => {
  const { id } = useParams();
  const { error, document } = useDocument("projects", id);
  // console.log(document.createdBy.id);
  if (error) {
    return <div>{error}</div>;
  }

  if (!document) {
    return <div>Loading...</div>;
  }

  return (
    <div className="lg:flex justify-center items-center ">
      <div className="lg:flex items-center bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <TopicDetails topic={document} createdBy={document.createdBy.id} />
        <Comments topic={document} />
      </div>
    </div>
  );
};

export default Details;
