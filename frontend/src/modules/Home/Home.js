import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";
import MainSlider from "../../components/MainSlider/MainSlider";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <MainSlider />
      </div>
      <Footer />
    </>
  );
};

export default Home;
