import React, { useState } from "react";
import "./Header.scss";

const Header = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
  };

  let searchBox;
  if (props.title === "ALL PRODUCTS" || props.title === "PRODUCTS") {
    searchBox = (
      <form className="search" onSubmit={handleSearch}>
        <input
          className="searchBar"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
