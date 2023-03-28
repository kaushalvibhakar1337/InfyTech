import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./PrivacyPolicy.scss";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <Header title="PRIVACY POLICY" />
      <div className="privacyPolicy"></div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
