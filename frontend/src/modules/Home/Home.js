import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Slideshow from "../../components/Slideshow/Slideshow";
import CategorySlider from "../../components/CategorySlider/CategorySlider";
import Footer from "../../components/Footer/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home.scss";

const Home = () => {
  const images = [
    "slideshowImg1.jpg",
    "slideshowImg2.jpg",
    "slideshowImg3.jpg",
    "slideshowImg4.jpg",
  ];

  const notify = () =>
    toast.success(
      <div>
        THANK YOU FOR SHOPPING WITH US!
        <br />
        KINDLY CHECK YOUR EMAIL FOR FURTHER UPDATES ON YOUR ORDER.
      </div>,
      {
        className: "toastify",
        position: "bottom-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );

  const urlParams = new URLSearchParams(window.location.search);
  const success = urlParams.get("success") === "true";

  return (
    <>
      <Navbar />
      <div className="home">
        <Slideshow images={images} />
        <div className="section">YOUR FAVOURITE PC PARTS IN ONE PLACE</div>
        <CategorySlider />
      </div>
      {success && notify()}
      <Footer />
    </>
  );
};

export default Home;
