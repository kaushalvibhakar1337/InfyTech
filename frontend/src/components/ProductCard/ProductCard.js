import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ item }) => {
  return (
    <div className="productCard">
      <img src={item.image} alt={item.name} className="img" />
      <h2 className="name">{item.name}</h2>
      <p className="price">{item.price}</p>
    </div>
  );
};

export default ProductCard;
