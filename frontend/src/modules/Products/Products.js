import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./Products.scss";

const Products = () => {
  return (
    <>
      <Navbar />
      <Header title="PRODUCTS" />
      <div class="products">
        <div class="left">Hello</div>
        <div class="right">World!</div>
      </div>
    </>
  );
};

export default Products;
