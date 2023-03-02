import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import DetailsSummary from "./TopicsSummary";
import Comments from "./Comments";
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
      <DetailsSummary topic={document} />
      <Comments topic={document} />
    </div>
  );
};

export default Details;
