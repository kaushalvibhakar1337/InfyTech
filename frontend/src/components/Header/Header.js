import React from "react";
import "./Header.scss";

const Header = (props) => {
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Hello!");
  };

  let searchBox;
  if (props.title === "ALL PRODUCTS" || props.title === "PRODUCTS") {
    searchBox = (
      <form className="search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          className="searchBar"
          required
        />
        <button type="submit" className="searchIcon">
          <i className="fa-solid fa-magnifying-glass "></i>
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
