import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <Header title="MY ACCOUNT" />
      <div className="myProfile"></div>
      <Footer />
    </>
  );
};

export default Profile;
