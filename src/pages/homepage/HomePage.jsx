import { useState } from "react";

import TopicList from "../../components/TopicList";
import { useCollection } from "../../hooks/useCollection";
import { categories } from "../create/Create";
import { useOutletContext } from "react-router-dom";
import Button from "../../utilities/Button";
import ErrorPage from "../../utilities/ErrorPage";

const HomePage = () => {
  const { documents, error } = useCollection("projects");

  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortingOrder] = useOutletContext();

  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName === "all" ? "" : categoryName);
  };

  const filteredDocuments =
    selectedCategory !== ""
      ? documents.filter((doc) => doc.category === selectedCategory)
      : documents;

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex flex-wrap justify-center items-center gap-2 mb-4">
        <Button
          className="mr-2"
          text="Wszystkie"
          key="all"
          onClick={() => handleCategoryChange("all")}
        />
        {categories.map((category) => (
          <Button
            text={category.label}
            key={category.value}
            onClick={() => handleCategoryChange(category.value)}
            className="mr-2"
          >
            {category.label}
          </Button>
        ))}
      </div>
      {error && <ErrorPage message={error} />}
      <div className="w-full">
        {filteredDocuments ? (
          <TopicList topics={filteredDocuments} sortingOrder={sortingOrder} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default HomePage;
