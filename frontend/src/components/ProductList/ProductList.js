import React from "react";
import useFetch from "../../hooks/useFetch";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss";

const ProductList = () => {
  const { data, loading, error } = useFetch(`/products?populate=*`);

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
