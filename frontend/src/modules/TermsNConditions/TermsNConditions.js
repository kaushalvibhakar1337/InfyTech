import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./TermsNConditions.scss";

const TermsNConditions = () => {
  return (
    <>
      <Navbar />
      <Header title="TERM & CONDITIONS" />
      <div className="TermsNConditions"></div>
      <Footer />
    </>
  );
};

export default TermsNConditions;
