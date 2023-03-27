import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Register.scss";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="registerForm" style={{ marginTop: "15px" }}>
        <p className="heading">REGISTER</p>
        <p className="legend"> Please fill the information below:</p>
        <input className="inputField" type={"text"} placeholder="First Name" />
        <input className="inputField" type={"text"} placeholder="Last Name" />
        <input className="inputField" type={"text"} placeholder="Email" />
        <input
          className="inputField"
          type={"password"}
          placeholder="Password"
        />
        <button type="button" className="submit">
          CREATE MY ACCOUNT
        </button>
        <p className="hint">
          Already have an account? <NavLink to="/login">LOG IN</NavLink>
        </p>
      </div>
    </>
  );
};

export default Register;
