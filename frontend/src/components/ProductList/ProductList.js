import React from "react";
import useFetchData from "../../hooks/useFetchData";
import ProductCard from "../ProductCard/ProductCard";
import { ClipLoader } from "react-spinners";
import "./ProductList.scss";

const ProductList = ({ searchQuery }) => {
  const { data, loading, error } = useFetchData(
    `/products?populate=*&[filters][$or][0][name][$containsi]=${searchQuery}&[filters][$or][1][company][$containsi]=${searchQuery}`
  );

  if (data) {
    data.sort(() => Math.random() - 0.5);
  }

  return (
    <div className="productList">
      {error ? (
        "Oops, something went wrong! Please try again later."
      ) : loading ? (
        <ClipLoader color="white" />
      ) : data && data.length ? (
        data.map((item) => <ProductCard item={item} key={item.id} />)
      ) : (
        "Sorry, we couldn't find any products matching your search."
      )}
    </div>
  );
};

export default ProductList;
