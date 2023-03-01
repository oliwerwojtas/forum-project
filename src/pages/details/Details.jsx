import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import DetailsSummary from "./DetailsSummary";
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
      <Comments />
    </div>
  );
};

export default Details;
