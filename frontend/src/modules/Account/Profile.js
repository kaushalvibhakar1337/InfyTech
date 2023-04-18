import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { UserAuth } from "../../context/AuthContext";
import useFetchUser from "../../hooks/useFetchUser";
import "./Profile.scss";

const Profile = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const userData = useFetchUser(user?.uid);
  const firstName = userData?.FirstName;

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
        <div className="container">
          <div className="left">
            <p className="heading">PROFILE INFORMATION</p>
            <p className="content">Welcome back, {firstName}!</p>
          </div>
          <div className="right">
            <p className="heading">PRIMARY ADDRESS</p>
            <p className="content">Surat, Gujarat, India 395007</p>
          </div>
        </div>
        <button className="logoutBtn" onClick={handleLogout}>
          LOGOUT
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
