import React from "react";
import useFetchData from "../../hooks/useFetchData";
import ProductCard from "../ProductCard/ProductCard";
import { ClipLoader } from "react-spinners";
import "./ProductList.scss";

const FilteredProductList = ({
  categoryId,
  filters,
  maxPrice,
  sort,
  searchQuery,
}) => {
  const { data, loading, error } = useFetchData(
    `/products?populate=*&[filters][categories][id]=${categoryId}${filters.map(
      (item) => `&[filters][sub_categories][id]=${item}&`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}&[filters][$or][0][name][$containsi]=${searchQuery}&[filters][$or][1][company][$containsi]=${searchQuery}`
  );

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

export default FilteredProductList;
