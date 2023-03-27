import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = () => {
  const data = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/0057/0327/0467/products/2_400x.jpg?v=1643224745",
      name: "BLOMMA",
      price: "FROM R 15,499.00",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0057/0327/0467/products/HolyCube_TexturedBlack_All_ca93a66c-04aa-43b6-87c1-52a50bd58c4f_400x.jpg?v=1633521413",
      name: "CUSTOM | HOLY CUBE",
      price: "FROM R 22,999.00",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0057/0327/0467/products/EKOPlanter-steelhangingplanter-greenwallwood_edit-final_400x.jpg?v=1649162010",
      name: "EKO",
      price: "FROM R 1,699.00",
    },
  ];

  return (
    <div className="productList">
      {data?.map((item) => (
        <ProductCard item={item} key={item.name} />
      ))}
    </div>
  );
};

export default ProductList;
