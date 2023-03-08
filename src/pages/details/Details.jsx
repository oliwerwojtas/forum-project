import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";

import Comments from "./Comments";
import TopicDetails from "./TopicDetails";
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
    <div>
      <TopicDetails topic={document} />
      <Comments topic={document} />
    </div>
  );
};

export default Details;
