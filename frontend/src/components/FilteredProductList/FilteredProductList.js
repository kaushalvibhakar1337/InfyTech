import React from "react";
import useFetch from "../../hooks/useFetch";
import ProductCard from "../ProductCard/ProductCard";
import "./FilteredProductList.scss";

const FilteredProductList = ({ catId, maxPrice, sort }) => {
  const { data, loading, error } = useFetch(`products?populate=*`);

  return (
    <div className="filteredProductList">
      {error
        ? "Something went wrong!"
        : loading
        ? "Loading..."
        : data.map((item) => <ProductCard item={item} key={item.id} />)}
    </div>
  );
};

export default FilteredProductList;

//&[filters][price][$lte]=${maxPrice}&sort=price:${sort}
//categories?filters[id][$eq]=${catId}/products?populate=*
