import React from "react";
import useFetch from "../../hooks/useFetch";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss";

const ProductList = ({ catId, maxPrice, sort }) => {
  const { data, loading, error } = useFetch(`/products?populate=*`);
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
