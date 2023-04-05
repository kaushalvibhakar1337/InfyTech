import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Slideshow from "../../components/Slideshow/Slideshow";
import CategorySlider from "../../components/CategorySlider/CategorySlider";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";

const Home = () => {
  const images = [
    "slideshowImg1.jpg",
    "slideshowImg2.jpg",
    "slideshowImg3.jpg",
    "slideshowImg4.jpg",
  ];

  return (
    <>
      <Navbar />
      <div className="home">
        <Slideshow images={images} />
        <div className="section">YOUR FAVOURITE PC PARTS IN ONE PLACE</div>
        <CategorySlider />
      </div>
      <Footer />
    </>
  );
};

export default Home;
