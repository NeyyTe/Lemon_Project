import React from "react";
import "./searchBar.css";

const SearchBar = ({ textSearchInput, setSearchInput }) => {
  return (
    <div className="search_bar_container">
      <input
        className="input"
        type="text"
        placeholder="Rechercher votre film ici... "
        value={textSearchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
    </div>
  );
};
export default SearchBar;
