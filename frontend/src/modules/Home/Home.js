import React from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const notifySuccess = () => {
    toast.success("THANK YOU FOR SHOPPING WITH US!", {
      className: "toastify",
      position: "bottom-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    toast.success(
      "PLEASE CHECK YOUR EMAIL FOR FURTHER UPDATES ON YOUR ORDER.",
      {
        className: "toastify",
        position: "bottom-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );
  };

  const notifyFailure = () => {
    toast.error(
      "WE'RE SORRY, BUT WE ENCOUNTERED AN ERROR WHILE PROCESSING YOUR PAYMENT.",
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

    toast.warning("PLEASE TRY AGAIN OR CONTACT US FOR ASSISTANCE.", {
      className: "toastify",
      position: "bottom-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      onClick: () => {
        navigate("/contact-us");
      },
    });
  };

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
