import React from "react";
import { NavLink } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = ({ item }) => {
  return (
    <div className="productCard">
      <NavLink to="/products/1">
        <div className="image">
          <img
            src={require(`../../assets/home/${item.img1}`)}
            alt={item.id}
            className="img1"
          />
          <img
            src={require(`../../assets/home/${item.img2}`)}
            alt={item.id}
            className="img2"
          />
        </div>
      </NavLink>
      <NavLink to="/products/1">
        <span className="name">{item.name}</span>
      </NavLink>
      <span className="price">{item.price}</span>
    </div>
  );
};

export default ProductCard;
