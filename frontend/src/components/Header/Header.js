import React from "react";
import "./Header.scss";

const Header = (props) => {
  const handleSearch = (e) => {
    e.preventDefault();
    props.setSearchQuery(e.target.elements.search.value);
  };

  let searchBox;
  if (props.title === "ALL PRODUCTS" || props.title === "PRODUCTS") {
    searchBox = (
      <form className="search" onSubmit={handleSearch}>
        <input
          id="search"
          className="searchBar"
          type="text"
          placeholder="Search..."
          autoComplete="off"
        />
        <button type="submit" className="searchIcon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    );
  } else {
    searchBox = null;
  }

  return (
    <header>
      <span>{props.title}</span>
      {searchBox}
    </header>
  );
};

export default Header;
