import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Error.scss";

const Error = () => {
  return (
    <div className="error">
      <Navbar />
      <div className="waypoint">
        <p className="top">404</p>
        <p className="middle">The page you are looking for cannot be found.</p>
        <NavLink to="/">
          <button className="bottom" type="button">
            BACK TO HOMEPAGE
          </button>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
