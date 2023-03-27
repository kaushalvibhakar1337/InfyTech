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
            <span className="heading">CATEGORIES</span>
            <div className="inputItem">
              <input type="checkbox" id="1" value={1} />
              <label htmlFor="1">KEYBOARDS</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="2" value={2} />
              <label htmlFor="2">MOUSE</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="3" value={3} />
              <label htmlFor="3">HEADPHONES</label>
            </div>
            <div className="filterItem">
              <span className="heading">PRICE</span>
              <div className="inputItem">
                <span>0</span>
                <input type="range" min={0} max={1000} />
                <span>1000</span>
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
        </div>
        <div class="right">
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default Products;
