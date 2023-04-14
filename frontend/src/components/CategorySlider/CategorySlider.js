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

  const data = [
    {
      img: "keyboard.jpg",
      name: "KEYBOARDS",
    },
    {
      img: "mouse.jpg",
      name: "MOUSE",
    },
    {
      img: "headphone.jpg",
      name: "HEADPHONES",
    },
    {
      img: "keyboard.jpg",
      name: "NAME 4",
    },
    {
      img: "keyboard.jpg",
      name: "NAME 5",
    },
    {
      img: "keyboard.jpg",
      name: "NAME 6",
    },
  ];

  return (
    <div className="categorySlider">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div className="card" item={item} key={index}>
            <img
              src={require(`../../assets/productSlider/${item.img}`)}
              alt=""
              className="img"
            />
            <div className="info">
              <span className="name">{item.name}</span>
              {/* <button className="viewBtn">VIEW PRODUCTS</button> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;
