import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";
import MainSlider from "../../components/MainSlider/MainSlider";

const Home = () => {
  const images = [
    "mainSliderImg1.jpg",
    "mainSliderImg2.jpg",
    "mainSliderImg3.jpg",
    "mainSliderImg1.jpg",
  ];

  return (
    <>
      <Navbar />
      <div className="home">
        <MainSlider images={images} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
