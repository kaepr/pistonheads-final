import React, { Fragment } from "react";

const CarouselComp = ({ src }) => {
  return (
    <div>
      <img src={src} alt="slide-img" className="img-styles" />
    </div>
  );
};

export default CarouselComp;
