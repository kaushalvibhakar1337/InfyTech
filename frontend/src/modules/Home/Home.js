import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import MainSlider from "../../components/MainSlider/MainSlider";
import "./Home.scss";
import ProductSlider from "../../components/ProductSlider/ProductSlider";

const Home = () => {
  const images = [
    "mainSliderImg1.jpg",
    "mainSliderImg2.jpg",
    "mainSliderImg3.jpg",
    "mainSliderImg4.jpg",
  ];

  return (
    <>
      <Navbar />
      <div className="home">
        <MainSlider images={images} />
        <div className="section">YOUR FAVOURITE PC PARTS IN ONE PLACE</div>
      </div>
      <ProductSlider />
      <Footer />
    </>
  );
};

export default Home;
