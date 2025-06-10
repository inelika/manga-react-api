import React from "react";
import "./CategoryList.css";

const categories = [
  { id: "b13b2a48-c720-44a9-9c77-39c9979373fb", name: "Action" },
  { id: "391b0423-d847-456f-aff0-8b0cfc03066b", name: "Comedy" },
  { id: "b9af3a63-f058-46de-a9a0-e0c13906197a", name: "Drama" },
  
];

const CategoryList = ({ onSelect }) => (
  <div className="category-list">
    {categories.map((cat) => (
      <button key={cat.id} onClick={() => onSelect(cat.id)}>
        {cat.name}
      </button>
    ))}
  </div>
);

export default CategoryList;
