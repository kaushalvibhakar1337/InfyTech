import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./ProductDetails.scss";

const ProductDetails = () => {
  const images = ["DemoImg1.jpg", "DemoImg2.jpg", "DemoImg3.jpg"];
  return (
    <>
      <Navbar />
      <div className="productDetails">
        <div className="left">
          <div className="images">
            <img src={require(`../../assets/${images[1]}`)} alt="" />
            <img src={require(`../../assets/${images[2]}`)} alt="" />
          </div>
          <div className="mainImg">
            <img src={require(`../../assets/${images[0]}`)} alt="" />
          </div>
        </div>
        <div className="right"></div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
