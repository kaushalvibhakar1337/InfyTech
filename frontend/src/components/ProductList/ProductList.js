import React from "react";
import useFetchData from "../../hooks/useFetchData";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss";

const ProductList = () => {
  let x = "g pro x superlight";
  const { data, loading, error } = useFetchData(
    `/products?populate=*&[filters][$or][0][name][$containsi]=${x}&[filters][$or][1][company][$containsi]=${x}`
  );
  console.log(data);

  if (data) {
    data.sort(() => Math.random() - 0.5);
  }

  return (
    <div className="productList">
      {error
        ? "Something went wrong!"
        : loading
        ? "Loading..."
        : data.map((item) => <ProductCard item={item} key={item.id} />)}
    </div>
  );
};

export default ProductList;
