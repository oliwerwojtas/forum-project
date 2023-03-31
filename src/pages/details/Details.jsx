import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";

import Comments from "./Comments";
import TopicDetails from "./TopicDetails";
import Wrapper from "../../utilities/Wrapper";
const Details = () => {
  const { id } = useParams();
  const { error, document } = useDocument("projects", id);

  if (error) {
    return <div>{error}</div>;
  }

  if (!document) {
    return <div>Loading...</div>;
  }

  return (
    <div className="lg:flex justify-center items-center">
      <div className="lg:flex justify-between items-center bg-white shadow-md rounded w-8/12 px-8 pt-6 pb-8 mb-4">
        <TopicDetails topic={document} />
        <Comments topic={document} />
      </div>
    </div>
  );
};

export default Details;
