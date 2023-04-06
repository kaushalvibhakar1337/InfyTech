import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Account.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Your Email is : " + email);
    console.log("Your Password is : " + pass);
  };

  return (
    <div className="login">
      <Navbar />
      <form
        className="form"
        style={{ marginTop: "15px" }}
        onSubmit={handleSubmit}
      >
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
        <button type="submit" className="submit">
          LOGIN
        </button>
        <p className="hint">
          Don't have an account? <NavLink to="/register">CREATE ONE</NavLink>
        </p>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
