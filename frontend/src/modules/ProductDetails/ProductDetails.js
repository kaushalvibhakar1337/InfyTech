import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./ProductDetails.scss";

const ProductDetails = () => {
  const images = ["DemoImg1.jpg", "DemoImg2.jpg"];
  const [selectedImg, setSelectedImg] = useState(0);

  return (
    <>
      <Navbar />
      <div className="productDetails">
        <div className="left">
          <div className="images">
            <img
              src={require(`../../assets/${images[0]}`)}
              alt=""
              onClick={(e) => setSelectedImg(0)}
            />
            <img
              src={require(`../../assets/${images[1]}`)}
              alt=""
              onClick={(e) => setSelectedImg(1)}
            />
          </div>
          <div className="mainImg">
            <img src={require(`../../assets/${images[selectedImg]}`)} alt="" />
          </div>
        </div>
        <div className="right">
          <p className="company">COMPANY</p>
          <p className="name">PRODUCT</p>
          <p className="price">R 249.00</p>
          <p>Tax included. Shipping calculated at checkout.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
