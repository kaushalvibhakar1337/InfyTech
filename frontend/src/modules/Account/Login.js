import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Account.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = () => {
    console.log("Your Email is : " + email);
    console.log("Your Password is : " + pass);
  };

  return (
    <div className="login">
      <Navbar />
      <div className="form" style={{ marginTop: "15px" }}>
        <h1 className="heading">LOGIN</h1>
        <p className="legend"> Please enter your e-mail and password:</p>
        <input
          className="inputField"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="inputField"
          type="text"
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        />
        <p className="forgotPass">
          <NavLink to="/search">Forgot password?</NavLink>
        </p>
        <button type="button" className="submit" onClick={handleSubmit}>
          LOGIN
        </button>
        <p className="hint">
          Don't have an account? <NavLink to="/register">CREATE ONE</NavLink>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
