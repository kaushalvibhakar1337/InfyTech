import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <Navbar />
      <div className="loginForm" style={{ marginTop: "15px" }}>
        <h1 className="heading">LOGIN</h1>
        <p className="legend"> Please enter your e-mail and password:</p>
        <input className="inputField" type={"text"} placeholder="Email" />
        <input className="inputField" type={"text"} placeholder="Password" />
        <p className="forgotPass">
          <NavLink to="/search">Forgot password?</NavLink>
        </p>
        <button type="button" className="submit">
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
