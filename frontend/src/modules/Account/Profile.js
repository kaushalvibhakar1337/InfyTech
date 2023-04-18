import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { UserAuth } from "../../context/AuthContext";
import useUser from "../../hooks/useUser";
import "./Profile.scss";

const Profile = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const userData = useUser(user?.uid);
  const firstName = userData?.FirstName;
  const lastName = userData?.LastName;

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="profile">
      <Navbar />
      <Header title="MY ACCOUNT" />
      <div className="myProfile">
        <p>
          Welcome back, {firstName} {lastName}!
        </p>
        <button className="logoutBtn" onClick={handleLogout}>
          LOGOUT
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
