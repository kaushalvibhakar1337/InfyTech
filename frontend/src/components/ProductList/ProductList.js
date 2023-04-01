import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss";
import axios from "axios";

const ProductList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/products?populate=*",
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="productList">
      {data.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
