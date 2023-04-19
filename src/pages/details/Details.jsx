import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";

import Comments from "./Comments";
import TopicDetails from "./TopicDetails";
import ErrorPage from "../../utilities/ErrorPage";

const Details = () => {
  const { id } = useParams();
  const { error, document } = useDocument("projects", id);
  if (error) {
    return <ErrorPage />;
  }

  if (!document) {
    return <div>Loading...</div>;
  }

  return (
    <div className="lg:flex justify-center items-center ">
      <div className="lg:flex items-center bg-[#e4e5f1] shadow-md rounded px-8 pt-6 pb-8 mb-4 gap-2 dark:bg-[#25273c]">
        <TopicDetails topic={document} createdBy={document.createdBy.id} />
        <Comments topic={document} />
      </div>
    </div>
  );
};

export default Details;
