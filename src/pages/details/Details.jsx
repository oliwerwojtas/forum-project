import { useCollection } from "../../hooks/useCollection";
import TopicList from "../../components/TopicsList";

const Detail = () => {
  const { documents, error } = useCollection("projects");
  return (
    <div>
      <h2 className="page-title">Details</h2>
      {error && <p>{error}</p>}
      {documents && <TopicList topics={documents} />}
    </div>
  );
};

export default Detail;
