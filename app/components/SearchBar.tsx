import React, { useState } from "react";

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
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchBar;
