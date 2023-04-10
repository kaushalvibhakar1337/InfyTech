import React from "react";
import useFetch from "../../hooks/useFetch";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss";

const RelatedProductList = ({ rel, productId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${rel}&[filters][id][$notIn]=${productId}`
  );

  return (
    <div className="relatedProductList">
      {error
        ? "Something went wrong!"
        : loading
        ? "Loading..."
        : data
            .slice(0, 4)
            .map((item) => <ProductCard item={item} key={item.id} />)}
    </div>
  );
};

export default RelatedProductList;
