import { useCollection } from "../../hooks/useCollection";
const Detail = () => {
  const { documents, error } = useCollection("projects");
  return (
    <div>
      <h2 className="page-title">Details</h2>
      {error && <p>{error}</p>}
      {documents &&
        documents.map((doc) => {
          <p key={doc.id}>{doc.name}</p>;
        })}
    </div>
  );
};

export default Detail;
