import React from "react";
import useFetchData from "../../hooks/useFetchData";
import ProductCard from "../ProductCard/ProductCard";
import { ClipLoader } from "react-spinners";
import "./ProductList.scss";

const RelatedProductList = ({ rel, productId }) => {
  const { data, loading, error } = useFetchData(
    `/products?populate=*&[filters][categories][id]=${rel}&[filters][id][$notIn]=${productId}`
  );

  if (data) {
    data.sort(() => Math.random() - 0.5);
  }

  return (
    <div className="relatedProductList">
      {error ? (
        "Oops, something went wrong! Please try again later."
      ) : loading ? (
        <ClipLoader color="white" />
      ) : (
        data
          .slice(0, 4)
          .map((item) => <ProductCard item={item} key={item.id} />)
      )}
    </div>
  );
};

export default RelatedProductList;
