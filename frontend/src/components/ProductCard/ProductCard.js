import React from "react";
import { NavLink } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = ({ item }) => {
  return (
    <div className="productCard">
      <NavLink to={`/product/${item.id}`}>
        <div className="image">
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img1?.data?.attributes?.url
            }
            alt=""
            className="img1"
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="img2"
          />
        </div>
      </NavLink>
      <NavLink to={`/product/${item.id}`}>
        <span className="name">
          {item?.attributes.company} - {item?.attributes.name}
        </span>
      </NavLink>
      <span className="price">₹ - {item?.attributes.price}</span>
    </div>
  );
};

export default ProductCard;
