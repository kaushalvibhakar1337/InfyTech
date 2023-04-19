import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Footer.scss";

const Footer = () => {
  const [email, setEmail] = useState("");

  const notify = () =>
    toast.success("THANK YOU FOR SUBSCRIBING!", {
      className: "toastify",
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      notify();
    }
  };

  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>INFYTECH | YOUR GO-TO-DESTINATION FOR ALL YOUR COMPUTER NEEDS</h1>
          <span>
            <span className="innerSpan">Our Address : </span>Surat, Gujarat
            395007
          </span>
          <span>
            <span className="innerSpan">Contact No : </span>+91 7567261003
          </span>
        </div>
        <div className="item">
          <h1>MENU</h1>
          <NavLink to="/about-us">
            <span>ABOUT US</span>
          </NavLink>
          <NavLink to="/contact-us">
            <span>CONTACT US</span>
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
        <form className="item" onSubmit={handleSubscribe}>
          <h1>NEWSLETTER</h1>
          <span>
            Subscribe to receive updates, access to exclusive deals, and more.
          </span>
          <span>
            <input
              className="inputField"
              type="email"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </span>
          <span>
            <button type="submit" className="sub">
              SUBSCRIBE
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Footer;
