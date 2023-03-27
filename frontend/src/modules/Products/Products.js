import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import CategorySlider from "../../components/ProductSlider/CategorySlider";
import "./Products.scss";

const Products = () => {
  return (
    <>
      <Navbar />
      <Header title="PRODUCTS" />
      <CategorySlider />
    </>
  );
};

export default Products;
