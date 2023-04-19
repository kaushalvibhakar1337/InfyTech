import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./MyCart.scss";

const MyCart = () => {
  return (
    <>
      <Navbar />
      <Header title="MY CART" />
      <div className="myCart"></div>
      <Footer />
    </>
  );
};

export default MyCart;
