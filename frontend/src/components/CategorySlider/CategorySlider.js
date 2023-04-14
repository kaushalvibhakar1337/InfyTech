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
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default CategorySlider;
