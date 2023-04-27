import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import ProductList from "../../components/ProductList/ProductList";
import Footer from "../../components/Footer/Footer";
import "./Products.scss";

const AllProducts = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Navbar />
      <Header title="ALL PRODUCTS" setSearchQuery={setSearchQuery} />
      <div className="allProducts">
        <ProductList searchQuery={searchQuery} />
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
