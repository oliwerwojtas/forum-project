import { useState } from "react";
import TopicList from "../../components/TopicList";
import { useCollection } from "../../hooks/useCollection";
import { categories } from "../create/Create";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const { documents, error } = useCollection("projects");
  const [selectedCategory, setSelectedCategory] = useState("");
  // const navigate = useNavigate();
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {error && <p>{error}</p>}
      {documents && <TopicList topics={documents} />}
    </div>
  );
};

export default HomePage;
