import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Поиск манги..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">поиск</button>
    </form>
  );
};

export default SearchBar;
