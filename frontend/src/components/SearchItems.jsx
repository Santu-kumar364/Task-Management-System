import React from "react";

const SearchItems = ({ searchItem, setSearchItem }) => {
  return (
    <div className="header">
      <input
        className="input"
        placeholder="Search Todos"
        type="text"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
    </div>
  );
};

export default SearchItems;
