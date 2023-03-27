import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Products.scss";

const Products = () => {
  return (
    <>
      <Navbar />
      <Header title="PRODUCTS" />
      <div class="products">
        <div class="left">Hello</div>
        <div class="right">
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default Products;
