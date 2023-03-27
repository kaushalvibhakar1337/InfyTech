import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>MENU</h1>
          <span>CONTACT US</span>
          <span>ABOUT US</span>
          <span>PRIVACY POLICY</span>
          <span>REFUND POLICY</span>
          <span>TERMS OF SERVICE</span>
        </div>
        <div className="item">
          <h1>MENU</h1>
          <span>CONTACT US</span>
          <span>ABOUT US</span>
          <span>PRIVACY POLICY</span>
          <span>REFUND POLICY</span>
          <span>TERMS OF SERVICE</span>
        </div>
        <div className="item">
          <h1>NEWSLETTER</h1>
          <span>
            Subscribe to receive updates, access to exclusive deals, and more.
          </span>
          <span>
            <input type={Text} placeholder="Enter your email address" />
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
