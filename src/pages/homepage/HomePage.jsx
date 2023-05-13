import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";
//components
import TopicList from "../../components/TopicList";
import Button from "../../utilities/Button";
import ErrorPage from "../../utilities/ErrorPage";
//utilities
import { categories } from "../create/Create";

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
          className="mr-2 relative z-10"
          text="Wszystkie"
          key="all"
          onClick={() => handleCategoryChange("all")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
        {categories.map((category) => (
          <Button
            text={category.label}
            key={category.value}
            onClick={() => handleCategoryChange(category.value)}
            className="mr-2 relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
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
