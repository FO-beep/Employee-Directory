import React from "react";
import "../styles/SearchArea.css";

function SearchArea({ handleSearchChange }) {
  return (
    <form className="form-inline">
      <div className="searcharea">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => handleSearchChange(e)}
        />
        <button className="btn my-2 my-sm-0" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}
export default SearchArea;
