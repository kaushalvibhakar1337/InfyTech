import React from "react";
import useFetchData from "../../hooks/useFetchData";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss";

const ProductList = () => {
  const { data, loading, error } = useFetchData(`/products?populate=*`);
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
