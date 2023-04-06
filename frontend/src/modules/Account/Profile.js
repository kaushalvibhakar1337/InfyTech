import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./Profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <Navbar />
      <Header title="MY ACCOUNT" />
      <div className="myProfile">Welcome back </div>
      <Footer />
    </div>
  );
};

export default Profile;
