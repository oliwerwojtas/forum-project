import TopicList from "../../components/TopicsList";
import { useCollection } from "../../hooks/useCollection";

const HomePage = () => {
  const { documents, error } = useCollection("projects");
  return (
    <div>
      <h2 className="page-title">Details</h2>
      {error && <p>{error}</p>}
      {documents && <TopicList topics={documents} />}
    </div>
  );
};

export default HomePage;
