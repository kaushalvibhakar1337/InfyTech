import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductSlider.scss";

const ProductSlider = () => {
  const data = [
    {
      id: 1,
      img1: "mainSliderImg1.jpg",
      img2: "mainSliderImg4.png",
      name: "KEYBOARD",
      price: "99.99 $",
    },
    {
      id: 2,
      img1: "mainSliderImg2.jpg",
      img2: "mainSliderImg3.jpg",
      name: "MOUSE",
      price: "99.99 $",
    },
    {
      id: 3,
      img1: "mainSliderImg3.jpg",
      img2: "mainSliderImg1.jpg",
      name: "CPU",
      price: "99.99 $",
    },
    {
      id: 4,
      img1: "mainSliderImg4.png",
      img2: "mainSliderImg2.jpg",
      name: "HEADPHONES",
      price: "99.99 $",
    },
  ];

  return (
    <div className="productSlider">
      {data.map((item) => (
        <ProductCard item={item} key={data.id} />
      ))}
    </div>
  );
};

export default ProductSlider;
