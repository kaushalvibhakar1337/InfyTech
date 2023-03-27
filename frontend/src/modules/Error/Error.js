import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Error.scss";

const Error = () => {
  return (
    <>
      <Navbar />
      <div className="error">
        <p className="top">404</p>
        <p className="middle">The page you are looking for cannot be found.</p>
        <NavLink to="/">
          <button className="bottom" type="button">
            BACK TO HOMEPAGE
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default Error;
