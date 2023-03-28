import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./TermsOfService.scss";

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <Header title="TERM OF SERVICE" />
      <div className="termsOfService"></div>
      <Footer />
    </>
  );
};

export default TermsOfService;
