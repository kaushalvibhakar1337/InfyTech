import React from "react";
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
  return (
    <div className="categorySlider">
      <Slider {...settings}>
        <div>
          <div className="card">
            <img
              src={require("../../assets/productSlider/keyboard.jpg")}
              alt=""
              className="img"
            />
            <span className="name">NAME 1</span>
          </div>
        </div>
        <div>
          <div className="card">
            <img
              src={require("../../assets/productSlider/mouse.jpg")}
              alt=""
              className="img"
            />
            <span className="name">NAME 2</span>
          </div>
        </div>
        <div>
          <div className="card">
            <img
              src={require("../../assets/productSlider/headphone.jpg")}
              alt=""
              className="img"
            />
            <span className="name">NAME 3</span>
          </div>
        </div>
        <div>
          <div className="card">
            <img
              src={require("../../assets/productSlider/keyboard.jpg")}
              alt=""
              className="img"
            />
            <span className="name">NAME 4</span>
          </div>
        </div>
        <div>
          <div className="card">
            <img
              src={require("../../assets/productSlider/keyboard.jpg")}
              alt=""
              className="img"
            />
            <span className="name">NAME 5</span>
          </div>
        </div>
        <div>
          <div className="card">
            <img
              src={require("../../assets/productSlider/keyboard.jpg")}
              alt=""
              className="img"
            />
            <span className="name">NAME 6</span>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CategorySlider;
