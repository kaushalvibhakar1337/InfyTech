import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>INFYTECH | YOUR GO-TO-DESTINATION FOR ALL YOUR COMPUTER NEEDS</h1>
          <span>
            <span className="innerSpan">Our Address : </span>Ganpat Vidyanagar
            Mehsana-Gozaria, Highway, Kherva, Gujarat 384012
          </span>
          <span>
            <span className="innerSpan">Contact No : </span>+91 7567261003
          </span>
        </div>
        <div className="item">
          <h1>MENU</h1>
          <NavLink to="/contact-us">
            <span>CONTACT US</span>
          </NavLink>
          <NavLink to="/about-us">
            <span>ABOUT US</span>
          </NavLink>
          <NavLink to="/terms-and-conditions">
            <span>TERMS & CONDITIONS</span>
          </NavLink>
          <NavLink to="/privacy-policy">
            <span>PRIVACY POLICY</span>
          </NavLink>
          <NavLink to="/return-policy">
            <span>RETURN POLICY</span>
          </NavLink>
        </div>
        <div className="item">
          <h1>NEWSLETTER</h1>
          <span>
            Subscribe to receive updates, access to exclusive deals, and more.
          </span>
          <span>
            <input
              className="inputField"
              type="text"
              placeholder="Enter your email address"
            />
          </span>
          <span>
            <button type="button" className="sub">
              SUBSCRIBE
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
