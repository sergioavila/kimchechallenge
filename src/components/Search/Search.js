import React from "react";
import "./Search.css";

function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Search country" className="search__input" />
    </div>
  );
};

export default Search;