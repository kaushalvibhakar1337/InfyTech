import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./ProductDetails.scss";

const ProductDetails = () => {
  const images = ["DemoImg1.jpg", "DemoImg2.jpg"];
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

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
          <div className="wrapper">
            <p className="company">LOGITECH</p>
            <p className="name">G PRO X SUPERLIGHT</p>
            <p className="price">R 12499.99</p>
            <p className="shippingPolicy">
              Tax included. Shipping calculated at checkout.
            </p>
            <hr />
            <div className="quantity">
              <button
                className="minus"
                onClick={() => setQuantity((val) => (val === 1 ? 1 : val - 1))}
              >
                -
              </button>
              <p className="total">{quantity}</p>
              <button
                className="plus"
                onClick={() => setQuantity((val) => val + 1)}
              >
                +
              </button>
            </div>
            <button className="addToCart">ADD TO CART</button>
            <button className="buyNow">BUY IT NOW</button>
            <div className="description">
              Less than 63 grams. Advanced low-latency LIGHTSPEED wireless.
              Sub-micron precision with HERO 25K sensor. Remove all obstacles
              with our lightest and fastest PRO mouse ever.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
