import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ item }) => {
  return (
    <div className="productCard">
      <img
        src={require(`../../assets/home/${item.img1}`)}
        alt={item.id}
        className="img"
      />
      <span className="name">{item.name}</span>
      <span className="price">{item.price}</span>
    </div>
  );
};

export default ProductCard;
