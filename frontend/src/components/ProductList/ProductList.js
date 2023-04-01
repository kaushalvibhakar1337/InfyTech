import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          process.env.REACT_APP_API_URL + "/products",
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const data = [
    {
      id: 4,
      company: "LOGITECH",
      name: "HEADPHONES",
      price: "R 99.99",
      img1: "mainSliderImg4.jpg",
      img2: "mainSliderImg2.jpg",
    },
    {
      id: 5,
      company: "LOGITECH",
      name: "KEYBOARD",
      price: "R 199.99",
      img1: "mainSliderImg1.jpg",
      img2: "mainSliderImg4.jpg",
    },
    {
      id: 6,
      company: "LOGITECH",
      name: "MOUSE",
      price: "FROM R 399.00",
      img1: "mainSliderImg2.jpg",
      img2: "mainSliderImg3.jpg",
    },
    {
      id: 7,
      company: "LOGITECH",
      name: "CPU",
      price: "FROM R 799.99",
      img1: "mainSliderImg3.jpg",
      img2: "mainSliderImg1.jpg",
    },
    {
      id: 8,
      company: "LOGITECH",
      name: "HEADPHONES",
      price: "R 99.99",
      img1: "mainSliderImg4.jpg",
      img2: "mainSliderImg2.jpg",
    },
    {
      id: 9,
      company: "LOGITECH",
      name: "KEYBOARD",
      price: "R 199.99",
      img1: "mainSliderImg1.jpg",
      img2: "mainSliderImg4.jpg",
    },
    {
      id: 10,
      company: "LOGITECH",
      name: "MOUSE",
      price: "FROM R 399.00",
      img1: "mainSliderImg2.jpg",
      img2: "mainSliderImg3.jpg",
    },
    {
      id: 11,
      company: "LOGITECH",
      name: "CPU",
      price: "FROM R 799.99",
      img1: "mainSliderImg3.jpg",
      img2: "mainSliderImg1.jpg",
    },
    {
      id: 12,
      company: "LOGITECH",
      name: "HEADPHONES",
      price: "R 99.99",
      img1: "mainSliderImg4.jpg",
      img2: "mainSliderImg2.jpg",
    },
    {
      id: 13,
      company: "LOGITECH",
      name: "KEYBOARD",
      price: "R 199.99",
      img1: "mainSliderImg1.jpg",
      img2: "mainSliderImg4.jpg",
    },
    {
      id: 14,
      company: "LOGITECH",
      name: "MOUSE",
      price: "FROM R 399.00",
      img1: "mainSliderImg2.jpg",
      img2: "mainSliderImg3.jpg",
    },
    {
      id: 15,
      company: "LOGITECH",
      name: "CPU",
      price: "FROM R 799.99",
      img1: "mainSliderImg3.jpg",
      img2: "mainSliderImg1.jpg",
    },
    {
      id: 16,
      company: "LOGITECH",
      name: "HEADPHONES",
      price: "R 99.99",
      img1: "mainSliderImg4.jpg",
      img2: "mainSliderImg2.jpg",
    },
    {
      id: 17,
      company: "LOGITECH",
      name: "KEYBOARD",
      price: "R 199.99",
      img1: "mainSliderImg1.jpg",
      img2: "mainSliderImg4.jpg",
    },
    {
      id: 18,
      company: "LOGITECH",
      name: "MOUSE",
      price: "FROM R 399.00",
      img1: "mainSliderImg2.jpg",
      img2: "mainSliderImg3.jpg",
    },
    {
      id: 19,
      company: "LOGITECH",
      name: "CPU",
      price: "FROM R 799.99",
      img1: "mainSliderImg3.jpg",
      img2: "mainSliderImg1.jpg",
    },
    {
      id: 20,
      company: "LOGITECH",
      name: "HEADPHONES",
      price: "R 99.99",
      img1: "mainSliderImg4.jpg",
      img2: "mainSliderImg2.jpg",
    },
    {
      id: 21,
      company: "LOGITECH",
      name: "KEYBOARD",
      price: "R 199.99",
      img1: "mainSliderImg1.jpg",
      img2: "mainSliderImg4.jpg",
    },
    {
      id: 22,
      company: "LOGITECH",
      name: "MOUSE",
      price: "FROM R 399.00",
      img1: "mainSliderImg2.jpg",
      img2: "mainSliderImg3.jpg",
    },
    {
      id: 23,
      company: "LOGITECH",
      name: "CPU",
      price: "FROM R 799.99",
      img1: "mainSliderImg3.jpg",
      img2: "mainSliderImg1.jpg",
    },
    {
      id: 24,
      company: "LOGITECH",
      name: "HEADPHONES",
      price: "R 99.99",
      img1: "mainSliderImg4.jpg",
      img2: "mainSliderImg2.jpg",
    },
    {
      id: 25,
      company: "LOGITECH",
      name: "KEYBOARD",
      price: "R 199.99",
      img1: "mainSliderImg1.jpg",
      img2: "mainSliderImg4.jpg",
    },
    {
      id: 26,
      company: "LOGITECH",
      name: "MOUSE",
      price: "FROM R 399.00",
      img1: "mainSliderImg2.jpg",
      img2: "mainSliderImg3.jpg",
    },
    {
      id: 27,
      company: "LOGITECH",
      name: "CPU",
      price: "FROM R 799.99",
      img1: "mainSliderImg3.jpg",
      img2: "mainSliderImg1.jpg",
    },
    {
      id: 28,
      company: "LOGITECH",
      name: "HEADPHONES",
      price: "R 99.99",
      img1: "mainSliderImg4.jpg",
      img2: "mainSliderImg2.jpg",
    },
    {
      id: 29,
      company: "LOGITECH",
      name: "KEYBOARD",
      price: "R 199.99",
      img1: "mainSliderImg1.jpg",
      img2: "mainSliderImg4.jpg",
    },
    {
      id: 30,
      company: "LOGITECH",
      name: "MOUSE",
      price: "FROM R 399.00",
      img1: "mainSliderImg2.jpg",
      img2: "mainSliderImg3.jpg",
    },
    {
      id: 31,
      company: "LOGITECH",
      name: "CPU",
      price: "FROM R 799.99",
      img1: "mainSliderImg3.jpg",
      img2: "mainSliderImg1.jpg",
    },
    {
      id: 32,
      company: "LOGITECH",
      name: "HEADPHONES",
      price: "R 99.99",
      img1: "mainSliderImg4.jpg",
      img2: "mainSliderImg2.jpg",
    },
    {
      id: 33,
      company: "LOGITECH",
      name: "KEYBOARD",
      price: "R 199.99",
      img1: "mainSliderImg1.jpg",
      img2: "mainSliderImg4.jpg",
    },
    {
      id: 34,
      company: "LOGITECH",
      name: "MOUSE",
      price: "FROM R 399.00",
      img1: "mainSliderImg2.jpg",
      img2: "mainSliderImg3.jpg",
    },
    {
      id: 35,
      company: "LOGITECH",
      name: "CPU",
      price: "FROM R 799.99",
      img1: "mainSliderImg3.jpg",
      img2: "mainSliderImg1.jpg",
    },
    {
      id: 36,
      company: "LOGITECH",
      name: "HEADPHONES",
      price: "R 99.99",
      img1: "mainSliderImg4.jpg",
      img2: "mainSliderImg2.jpg",
    },
    {
      id: 37,
      company: "LOGITECH",
      name: "KEYBOARD",
      price: "R 199.99",
      img1: "mainSliderImg1.jpg",
      img2: "mainSliderImg4.jpg",
    },
    {
      id: 38,
      company: "LOGITECH",
      name: "MOUSE",
      price: "FROM R 399.00",
      img1: "mainSliderImg2.jpg",
      img2: "mainSliderImg3.jpg",
    },
    {
      id: 39,
      company: "LOGITECH",
      name: "CPU",
      price: "FROM R 799.99",
      img1: "mainSliderImg3.jpg",
      img2: "mainSliderImg1.jpg",
    },
  ];

  return (
    <div className="productList">
      {data.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
