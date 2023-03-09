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
      {error && <p>{error}</p>}
      {documents && (
        <div className="flex flex-wrap mt-12">
          {categories.map((category) => (
            <div className="flex w-2/4 justify-center items-center ">
              <Link
                className="my-8"
                to="/"
                onClick={() => handleCategoryClick(category.value)}
                key={category.value}
              >
                <h3>{category.label}</h3>
              </Link>
            </div>
          ))}
          {selectedCategory && (
            <TopicList topics={documents.filter((doc) => doc.category === selectedCategory)} />
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
