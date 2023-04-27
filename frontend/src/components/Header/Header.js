import React from "react";
import "./Header.scss";

const Header = (props) => {
  let searchBox;
  if (props.title === "ALL PRODUCTS") {
    searchBox = (
      <p className="searchIcon">
        <i className="fa-solid fa-magnifying-glass"></i>
      </p>
    );
  } else if (props.title === "PRODUCTS") {
    searchBox = (
      <p className="searchIcon">
        <i className="fa-solid fa-magnifying-glass"></i>
      </p>
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
