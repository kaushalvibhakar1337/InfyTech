import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import ProductList from "../../components/ProductList/ProductList";
import Footer from "../../components/Footer/Footer";
import "./Products.scss";

const AllProducts = () => {
  return (
    <>
      <Navbar />
      <Header title="ALL PRODUCTS" />
      <div className="allProducts">
        <ProductList />
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
