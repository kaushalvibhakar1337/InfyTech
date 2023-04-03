import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Slideshow from "../../components/Slideshow/Slideshow";
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
      </div>
      <Footer />
    </>
  );
};

export default Home;
