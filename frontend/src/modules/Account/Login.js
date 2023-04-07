import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Account.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/profile");
    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  };

  return (
    <div className="login">
      <Navbar />
      {error && <p>{error}</p>}
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
          onChange={(e) => setPassword(e.target.value)}
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
