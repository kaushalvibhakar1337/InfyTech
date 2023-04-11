import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import FilteredProductList from "../../components/ProductList/FilteredProductList";
import Footer from "../../components/Footer/Footer";
import "./Products.scss";

const Products = () => {
  const categoryId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(150000);
  const [sort, setSort] = useState("asc");
  const [selectedFilters, setSelectedFilters] = useState([]);

  const { data } = useFetch(
    `/sub-categories?[filters][categories][id]=${categoryId}`
  );

  const { filterData } = useFetch(`/categories?[filters][id]=${categoryId}`);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedFilters(
      isChecked
        ? [...selectedFilters, value]
        : selectedFilters.filter((item) => item !== value)
    );
  };

  return (
    <>
      <Navbar />
      <Header title="PRODUCTS" />
      <div className="products">
        <div className="left">
          <p className="mainHeading">FILTERS</p>
          <div className="filterItem">
            {filterData.map((item) => (
              <span className="heading" key={item.id}>
                {item.attributes.filterType}
              </span>
            ))}
            {data.map((item) => (
              <div className="inputItem" key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  value={item.id}
                  onChange={handleChange}
                />
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            ))}
          </div>
          <div className="filterItem">
            <span className="heading">PRICE</span>
            <div className="inputItem">
              <input
                className="range"
                type="range"
                min={0}
                max={150000}
                step={2500}
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
            filters={selectedFilters}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
