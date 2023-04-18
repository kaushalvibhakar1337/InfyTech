import React from "react";
import useFetchData from "../../hooks/useFetchData";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss";

const FilteredProductList = ({ categoryId, filters, maxPrice, sort }) => {
  const { data, loading, error } = useFetchData(
    `/products?populate=*&[filters][categories][id]=${categoryId}${filters.map(
      (item) => `&[filters][sub_categories][id]=${item}&`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

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

export default FilteredProductList;
