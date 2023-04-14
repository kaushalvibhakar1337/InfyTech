import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Slideshow.scss";

function Slideshow({ images, interval = 5000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images.length, interval]);

  return (
    <div className="slideshow">
      <div className="slides">
        {images.map((image, i) => (
          <img
            key={i}
            className={`slide ${i === index ? "active" : ""}`}
            src={require(`../../assets/slideshow/${image}`)}
            alt=""
          />
        ))}
        <NavLink to="/products/all">
          <button type="button" className="btn">
            SHOP NOW
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Slideshow;
