import React from "react";
import Slider from "react-slick";
import "./CategorySlider2.scss";

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
            <div className="info">
              <span className="name">KEYBOARDS</span>
              {/* <button className="viewBtn">VIEW PRODUCTS</button> */}
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img
              src={require("../../assets/productSlider/mouse.jpg")}
              alt=""
              className="img"
            />
            <div className="info">
              <span className="name">MICE</span>
              {/* <button className="viewBtn">VIEW PRODUCTS</button> */}
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img
              src={require("../../assets/productSlider/headphone.jpg")}
              alt=""
              className="img"
            />
            <div className="info">
              <span className="name">HEADPHONES</span>
              {/* <button className="viewBtn">VIEW PRODUCTS</button> */}
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img
              src={require("../../assets/productSlider/keyboard.jpg")}
              alt=""
              className="img"
            />
            <div className="info">
              <span className="name">HEADPHONES</span>
              {/* <button className="viewBtn">VIEW PRODUCTS</button> */}
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img
              src={require("../../assets/productSlider/keyboard.jpg")}
              alt=""
              className="img"
            />
            <div className="info">
              <span className="name">HEADPHONES</span>
              {/* <button className="viewBtn">VIEW PRODUCTS</button> */}
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img
              src={require("../../assets/productSlider/keyboard.jpg")}
              alt=""
              className="img"
            />
            <div className="info">
              <span className="name">HEADPHONES</span>
              {/* <button className="viewBtn">VIEW PRODUCTS</button> */}
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CategorySlider;
