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
        <div class="left">
          <div className="filterItem">
            <h2>CATEGORIES</h2>
            <div className="inputItem">
              <input type="checkbox" id="1" value={1} />
              <label htmlFor="1"></label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="1" value={1} />
              <label htmlFor="1">1</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="1" value={1} />
              <label htmlFor="1">1</label>
            </div>
            <div className="inputItem"></div>
            <div className="inputItem"></div>
          </div>
        </div>
        <div class="right">
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default Products;
