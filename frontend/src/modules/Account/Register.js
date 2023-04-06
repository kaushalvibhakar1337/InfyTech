import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Account.scss";

const Register = () => {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPass, setNewPass] = useState("");
  const handleSubmit = () => {
    console.log("Your Fullname is : " + Fname + " " + Lname);
    console.log("Your Email is : " + newEmail);
    console.log("Your Password is : " + newPass);
  };

  return (
    <div className="register">
      <Navbar />
      <div className="form" style={{ marginTop: "15px" }}>
        <p className="heading">REGISTER</p>
        <p className="legend"> Please fill the information below:</p>
        <input
          className="inputField"
          type="text"
          placeholder="First Name"
          onChange={(e) => setFname(e.target.value)}
        />
        <input
          className="inputField"
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLname(e.target.value)}
        />
        <input
          className="inputField"
          type="text"
          placeholder="Email"
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <input
          className="inputField"
          type="password"
          placeholder="Password"
          onChange={(e) => setNewPass(e.target.value)}
        />
        <button type="button" className="submit" onClick={handleSubmit}>
          CREATE MY ACCOUNT
        </button>
        <p className="hint">
          Already have an account? <NavLink to="/login">LOG IN</NavLink>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
