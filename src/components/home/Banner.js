import React from "react";
import "./Banner.css";
import MovingComponent from "react-moving-text";

const Banner = () => {
  return (
    <div className="banner">
      <div className="text_box">
        <MovingComponent
          type="popIn"
          duration="1000ms"
          delay="2s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <h1>Our Washing facility is one of the biggest in Bangladesh</h1>
        </MovingComponent>

        <MovingComponent
          type="popIn"
          duration="1000ms"
          delay="2s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <h4>
          A premium facility with state of the art laundry equipped with the
          latest Italian machines. We have washing capacity of 300,000 pcs/day
          with all types of dye, over dyeing garments and complicated fashion
          washes.
        </h4>
        </MovingComponent>

       
      </div>
    </div>
  );
};

export default Banner;
