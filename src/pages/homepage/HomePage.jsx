import { useState } from "react";
import TopicList from "../../components/CategoriesList";
import { useCollection } from "../../hooks/useCollection";
import { categories } from "../create/Create";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { documents, error } = useCollection("projects");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div>
      <h2 className="text-sky-400/75">Details</h2>
      {error && <p>{error}</p>}
      {documents && (
        <>
          {categories.map((category) => (
            <Link to="/" onClick={() => handleCategoryClick(category.value)} key={category.value}>
              <h3>{category.label}</h3>
            </Link>
          ))}
          {selectedCategory && (
            <TopicList topics={documents.filter((doc) => doc.category === selectedCategory)} />
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
