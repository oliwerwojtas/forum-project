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
        <div className="flex justify-center items-center flex-wrap mt-12">
          {selectedCategory ? (
            <TopicList topics={documents.filter((doc) => doc.category === selectedCategory)} />
          ) : (
            categories.map((category) => (
              <div
                className="flex w-5/12 justify-center items-center bg-slate-600 m-2"
                key={category.value}
              >
                <Link className="my-8" to="/" onClick={() => handleCategoryClick(category.value)}>
                  <h3>{category.label}</h3>
                </Link>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
