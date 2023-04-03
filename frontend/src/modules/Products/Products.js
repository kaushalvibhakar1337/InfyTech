import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import FilteredProductList from "../../components/FilteredProductList/FilteredProductList";
import "./Products.scss";

const Products = () => {
  const categoryId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [sort, setSort] = useState("asc");

  return (
    <>
      <Navbar />
      <Header title="PRODUCTS" />
      <div className="products">
        <div className="left">
          {/* <div className="filterItem">
            <span className="heading">TYPE</span>
            <div className="inputItem">
              <input type="checkbox" id="1" value={1} />
              <label htmlFor="1">WIRED</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="2" value={2} />
              <label htmlFor="2">WIRELESS</label>
            </div>
          </div> */}
          <p className="mainHeading">FILTERS</p>
          <div className="filterItem">
            <span className="heading">PRICE</span>
            <div className="inputItem">
              <input
                className="range"
                type="range"
                min={0}
                max={100000}
                step={1000}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
            <span>PRICE LIMIT -</span>
            <label>₹ {maxPrice}</label>
          </div>
          <div className="filterItem">
            <span className="heading">SORT</span>
            <div className="inputItem">
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                onChange={(e) => setSort("asc")}
              />
              <label htmlFor="asc">PRICE, LOW TO HIGH</label>
            </div>
            <div className="inputItem">
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onChange={(e) => setSort("desc")}
              />
              <label htmlFor="desc">PRICE, HIGH TO LOW</label>
            </div>
          </div>
        </div>
        <div className="right">
          <FilteredProductList
            categoryId={categoryId}
            maxPrice={maxPrice}
            sort={sort}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
