import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import ProductList from "../../components/ProductList/ProductList";
import "./Products.scss";

const Products = () => {
  const categoryId = parseInt(useParams().id);
  console.log(categoryId);
  return (
    <>
      <Navbar />
      <Header title="PRODUCTS" />
      <div className="products">
        <div className="left">
          <div className="filterItem">
            <span className="heading">CATEGORIES</span>
            <div className="inputItem">
              <input type="checkbox" id="1" value={1} />
              <label htmlFor="1">WIRED</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="2" value={2} />
              <label htmlFor="2">WIRELESS</label>
            </div>
          </div>
          <div className="filterItem">
            <span className="heading">PRICE</span>
            <div className="inputItem">
              <span>R 0</span>
              <input
                className="range"
                type="range"
                min={0}
                max={100000}
                step="5000"
              />
              <span>R 100000</span>
            </div>
          </div>
          <div className="filterItem">
            <span className="heading">SORT</span>
            <div className="inputItem">
              <input type="radio" id="asc" name="sortBy" />
              <label htmlFor="asc">PRICE, LOW TO HIGH</label>
            </div>
            <div className="inputItem">
              <input type="radio" id="desc" name="sortBy" />
              <label htmlFor="desc">PRICE, HIGH TO LOW</label>
            </div>
          </div>
        </div>
        <div className="right">
          <ProductList />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
