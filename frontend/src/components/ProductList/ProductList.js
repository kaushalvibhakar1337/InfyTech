import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss";

const ProductList = () => {
  const data = [
    {
      id: 1,
      img1: "mainSliderImg1.jpg",
      img2: "mainSliderImg4.png",
      name: "KEYBOARD",
      price: "R 199.99",
    },
    {
      id: 2,
      img1: "mainSliderImg2.jpg",
      img2: "mainSliderImg3.jpg",
      name: "MOUSE",
      price: "FROM R 399.00",
    },
    {
      id: 3,
      img1: "mainSliderImg3.jpg",
      img2: "mainSliderImg1.jpg",
      name: "CPU",
      price: "FROM R 799.99",
    },
    {
      id: 4,
      img1: "mainSliderImg4.png",
      img2: "mainSliderImg2.jpg",
      name: "HEADPHONES",
      price: "R 99.99",
    },
    {
      id: 5,
      img1: "mainSliderImg1.jpg",
      img2: "mainSliderImg4.png",
      name: "KEYBOARD",
      price: "R 199.99",
    },
    {
      id: 6,
      img1: "mainSliderImg2.jpg",
      img2: "mainSliderImg3.jpg",
      name: "MOUSE",
      price: "FROM R 399.00",
    },
    {
      id: 7,
      img1: "mainSliderImg3.jpg",
      img2: "mainSliderImg1.jpg",
      name: "CPU",
      price: "FROM R 799.99",
    },
    {
      id: 8,
      img1: "mainSliderImg4.png",
      img2: "mainSliderImg2.jpg",
      name: "HEADPHONES",
      price: "R 99.99",
    },
  ];

  return (
    <div className="productList">
      {data.map((item) => (
        <ProductCard item={item} key={data.id} />
      ))}
    </div>
  );
};

export default ProductList;
