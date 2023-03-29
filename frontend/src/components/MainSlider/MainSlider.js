import React from "react";
import "./MainSlider.scss";

const MainSlider = () => {
  return (
    <div className="mainSlider">
      <div className="container">
        <img src={require("../../assets/mainSliderImg1.jpg")} alt="" />
        <img src={require("../../assets/mainSliderImg2.jpg")} alt="" />
        <img src={require("../../assets/mainSliderImg3.jpg")} alt="" />
        <img src={require("../../assets/mainSliderImg4.jpg")} alt="" />
      </div>
      <div className="icons">
        <div className="icon"></div>
        <div className="icon"></div>
      </div>
    </div>
  );
};

export default MainSlider;
