import React from "react";
import Slider from "react-slick";
import "./CategorySlider1.scss";

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
      img: "processor.jpg",
      name: "PROCESSORS",
    },
    {
      img: "motherboard.jpg",
      name: "MOTHERBOARDS",
    },
    {
      img: "gpu.jpg",
      name: "GPUs",
    },
    {
      img: "psu.jpg",
      name: "PSUs",
    },
    {
      img: "cabinet.jpg",
      name: "CABINETS",
    },
    {
      img: "ram.jpg",
      name: "RAMs",
    },
    {
      img: "ssd.jpg",
      name: "SSDs",
    },
    {
      img: "mouse.jpg",
      name: "MICE",
    },
    {
      img: "keyboard.jpg",
      name: "KEYBOARDS",
    },
    {
      img: "headphone.jpg",
      name: "HEADPHONES",
    },
    {
      img: "mousepad.jpg",
      name: "MOUSEPADS",
    },
    {
      img: "monitor.jpg",
      name: "MONITORS",
    },
  ];

  return (
    <div className="categorySlider">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div className="card" item={item} key={index}>
            <img
              src={require(`../../assets/categorySlider/${item.img}`)}
              alt=""
              className="img"
            />
            <div className="info">
              {/* <span className="name">{item.name}</span> */}
              <button className="viewBtn">VIEW {item.name}</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;
