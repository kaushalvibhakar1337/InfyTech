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

  const notifySuccess = () =>
    toast.success(
      <div>
        THANK YOU FOR SHOPPING WITH US!
        <br />
        PLEASE CHECK YOUR EMAIL FOR FURTHER UPDATES ON YOUR ORDER.
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

  const notifyFailure = () =>
    toast.error(
      <div>
        WE'RE SORRY, BUT WE ENCOUNTERED AN ERROR WHILE PROCESSING YOUR PAYMENT.
        <br />
        PLEASE TRY AGAIN OR CONTACT US FOR ASSISTANCE.
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
  const failure = urlParams.get("success") === "false";

  return (
    <>
      <Navbar />
      <div className="home">
        <Slideshow images={images} />
        <div className="section">YOUR FAVOURITE PC PARTS IN ONE PLACE</div>
        <CategorySlider />
      </div>
      {success && notifySuccess()}
      {failure && notifyFailure()}
      <Footer />
    </>
  );
};

export default Home;
