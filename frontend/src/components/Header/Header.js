import React from "react";
import "./Header.scss";

const Header = (props) => {
  return (
    <header>
      <span>{props.title}</span>
    </header>
  );
};

export default Header;
