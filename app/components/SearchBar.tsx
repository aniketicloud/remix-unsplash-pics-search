import React, { useState } from "react";
import "./SearchBar.css";

interface SearchProps {
  onSubmit(term: string): void;
}

const SearchBar: React.FC<SearchProps> = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="search">Search Image</label>
        <input
          value={term}
          onChange={handleChange}
          type="search"
          name="search"
          id="search"
        />
      </form>
    </div>
  );
};

export default SearchBar;
