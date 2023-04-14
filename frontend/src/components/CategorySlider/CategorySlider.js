import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "./CategorySlider.scss";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="prevBtn" onClick={onClick}>
      &lt;
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="nextBtn" onClick={onClick}>
      &gt;
    </button>
  );
};

const CategorySlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const data = [
    {
      id: "1",
      img: "processor.jpg",
      name: "PROCESSORS",
    },
    {
      id: "2",
      img: "motherboard.jpg",
      name: "MOTHERBOARDS",
    },
    {
      id: "3",
      img: "gpu.jpg",
      name: "GPUs",
    },
    {
      id: "4",
      img: "psu.jpg",
      name: "PSUs",
    },
    {
      id: "5",
      img: "cabinet.jpg",
      name: "CABINETS",
    },
    {
      id: "6",
      img: "ram.jpg",
      name: "RAMs",
    },
    {
      id: "7",
      img: "ssd.jpg",
      name: "SSDs",
    },
    {
      id: "8",

      img: "mouse.jpg",
      name: "MICE",
    },
    {
      id: "9",
      img: "keyboard.jpg",
      name: "KEYBOARDS",
    },
    {
      id: "10",
      img: "headphone.jpg",
      name: "HEADPHONES",
    },
    {
      id: "11",
      img: "mousepad.jpg",
      name: "MOUSEPADS",
    },
    {
      id: "12",
      img: "monitor.jpg",
      name: "MONITORS",
    },
  ];

  return (
    <div className="categorySlider">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div className="card" item={item} key={item.id}>
            <img
              src={require(`../../assets/categorySlider/${item.img}`)}
              alt=""
              className="img"
            />
            <div className="info">
              {/* <span className="name">{item.name}</span> */}
              <NavLink to={`/products/${item.id}`}>
                <button className="viewBtn">VIEW {item.name}</button>
              </NavLink>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;
