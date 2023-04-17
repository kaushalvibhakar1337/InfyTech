import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { UserAuth } from "../../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "./Account.scss";

const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await createUser(email, password);
      await setDoc(doc(db, "users", res.user.uid), {
        FirstName: fname,
        LastName: lname,
        Email: email,
        Password: password,
      });
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="register">
      <Navbar />
      <form
        className="form"
        style={{ marginTop: "15px" }}
        onSubmit={handleSubmit}
      >
        <p className="heading">REGISTER</p>
        <p className="legend"> Please fill the information below:</p>
        {error && <p className="alertBox">{error}</p>}
        <input
          className="inputField"
          type="text"
          placeholder="First Name"
          onChange={(e) => setFname(e.target.value)}
          required
        />
        <input
          className="inputField"
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLname(e.target.value)}
          required
        />
        <input
          className="inputField"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="inputField"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="submit">
          CREATE MY ACCOUNT
        </button>
        <p className="hint">
          Already have an account? <NavLink to="/login">LOG IN</NavLink>
        </p>
      </form>
      <Footer />
    </div>
  );
};

export default Register;
