import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./MainSlider.scss";

function MainSlider({ images, interval = 3000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images.length, interval]);

  return (
    <div className="mainSlider">
      <div className="imgSlider">
        {images.map((image, i) => (
          <img
            key={i}
            className={`slide ${i === index ? "active" : ""}`}
            src={require(`../../assets/home/${image}`)}
            alt=""
          />
        ))}
        <NavLink to="/products">
          <button type="button" className="btn">
            SHOP NOW
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default MainSlider;
