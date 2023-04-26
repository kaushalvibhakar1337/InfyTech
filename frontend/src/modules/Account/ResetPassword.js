import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { UserAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Account.scss";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { resetPassword } = UserAuth();

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await resetPassword(email);
      notify();
    } catch (err) {
      setError(err.message);
    }
  };

  const notify = () =>
    toast.success("PLEASE CHECK YOUR EMAIL!", {
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

  return (
    <div className="resetPassword">
      <Navbar />
      <form
        className="form"
        style={{ marginTop: "15px" }}
        onSubmit={handlePasswordReset}
      >
        <h1 className="heading">RESET PASSWORD</h1>
        <p className="legend"> Please enter your e-mail:</p>
        {error && <p className="alertBox">{error}</p>}
        <input
          className="inputField"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="submit">
          RESET PASSWORD
        </button>
        <NavLink to="/login">
          <button className="backToLogin">BACK TO LOGIN</button>
        </NavLink>
      </form>
      <Footer />
    </div>
  );
};

export default ResetPassword;
