import React, { useState, useEffect } from "react";
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
      {images.map((image, i) => (
        <img
          key={i}
          className={`slide ${i === index ? "active" : ""}`}
          src={require(`../../assets/${image}`).default}
          alt=""
        />
      ))}
    </div>
  );
}

export default MainSlider;
