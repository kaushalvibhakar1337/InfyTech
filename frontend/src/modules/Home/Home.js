import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home"></div>
      <Footer />
    </>
  );
};

export default Home;
