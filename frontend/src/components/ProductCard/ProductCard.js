import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="productCard">
      <img src={image} alt={name} className="img" />
      <h2 className="name">{name}</h2>
      <p className="price">{price}</p>
    </div>
  );
};

export default ProductCard;
