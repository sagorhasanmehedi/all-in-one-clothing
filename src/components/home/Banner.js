import React from "react";
import "./Banner.css";
import Slider from "react-slick";

const Banner = () => {
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="banner">
      <div className="text_box">
        <Slider {...sliderSettings}>
          <>
            <h1>Our Washing facility is one of the biggest in Bangladesh</h1>
            <h4>
              A premium facility with state of the art laundry equipped with the
              latest Italian machines. We have washing capacity of 300,000
              pcs/day with all types of dye, over dyeing garments and
              complicated fashion washes.
            </h4>
            <div className="banner_dot">
              <div className="banner_dot_highlight"></div>
              <div></div>
              <div></div>
            </div>
          </>
          <>
            <h1>FASHION 2MORROW vertical in Denim</h1>
            <h4>
              Installed capacity of over 4 million meters per month. FASHION
              2MORROW produces yarns from it's own Spinning Mill with a capacity
              of 44 tons per day. It also has piece dyeing and yarn dyeing
              facility.
            </h4>
            <div className="banner_dot">
              <div></div>
              <div className="banner_dot_highlight"></div>
              <div></div>
            </div>
          </>
          <>
            <h1>FASHION 2MORROW's accessories unit is developing</h1>
            <h4>
              Manufactures it's own accessories like belt, twill tape, elastic,
              button, zipper, hangar, all kinds of paper and woven labels with
              full care.
            </h4>
            <div className="banner_dot">
              <div></div>
              <div></div>
              <div className="banner_dot_highlight"></div>
            </div>
          </>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
