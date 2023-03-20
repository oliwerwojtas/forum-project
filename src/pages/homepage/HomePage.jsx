import { useState } from "react";
import TopicList from "../list/TopicList";
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
      {documents && (
        <div className="flex justify-center items-center flex-wrap mt-12">
          {selectedCategory ? (
            <div>
              <TopicList topics={documents.filter((doc) => doc.category === selectedCategory)} />
            </div>
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
