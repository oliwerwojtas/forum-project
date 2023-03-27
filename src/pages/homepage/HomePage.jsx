import { useState } from "react";

import TopicList from "../../components/TopicList";
import { useCollection } from "../../hooks/useCollection";
import { categories } from "../create/Create";

const HomePage = () => {
  const { documents, error } = useCollection("projects");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredDocuments =
    selectedCategory !== ""
      ? documents.filter((doc) => doc.category === selectedCategory)
      : documents;

  return (
    <div>
      <div>
        <label htmlFor="category-select">Select a category:</label>
        <select id="category-select" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>
      {error && <p>{error}</p>}
      {filteredDocuments ? <TopicList topics={filteredDocuments} /> : <p>No topics found</p>}
    </div>
  );
};

export default HomePage;
