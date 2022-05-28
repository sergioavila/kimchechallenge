import React from "react";
import "./Search.css";

const Search =  () => {
  const [search, setSearch] = React.useState("");
  console.log(search);

  return (
    <div className="search">
      <input type="text" placeholder="Search country" className="search__input" onChange={(e) => setSearch(e.target.value)}/>
    </div>
  );
};

export default Search;