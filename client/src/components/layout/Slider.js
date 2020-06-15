import React, { useState } from "react";
import PropTypes from "prop-types";
import bg4 from "./img/slider-bg-4.jpg";
import bg2 from "./img/slider-bg-2.jpg";
import bg1 from "./img/slider-bg-1.jpg";
import bg3 from "./img/slider-bg-3.jpg";
import bg5 from "./img/slider-bg-5.jpg";
import bg6 from "./img/bg6.png";
import bg10 from "./img/bg10.png";
import bg7 from "./img/bg7.jpg";
import bg9 from "./img/bg9.jpg";
import bg11 from "./img/bg11.jpg";
import bg13 from "./img/bg13.png";
import "./style.scss";
import CarouselComp from "./CarouselComp";

const Slider = () => {
  let sliderArr = [
    <CarouselComp src={bg6} />,
    <CarouselComp src={bg13} />,
    <CarouselComp src={bg11} />,
    <CarouselComp src={bg9} />,
    <CarouselComp src={bg10} />,
  ];
  const [x, setX] = useState(0);
  const goLeft = () => {
    console.log(x);
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    console.log(x);
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translate(${x}%)` }}
          >
            <div className="intro-text-area">
              <h1>WELCOME TO </h1>
              <h1>PISTONHEADS</h1>
            </div>
            <div>{item}</div>
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button id="goRight" onClick={goRight}>
        <i className="fas fa-chevron-right"></i>
      </button>

      <img src={bg1} alt="slide-img" className="img-styles" />
    </div>
  );
};

Slider.propTypes = {};

export default Slider;
