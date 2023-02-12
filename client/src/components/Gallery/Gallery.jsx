import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <FaChevronCircleRight
        style={{ ...style, color: "black", fontSize: "40px" }}
      />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      {" "}
      <FaChevronCircleLeft
        style={{ ...style, color: "black", fontSize: "40px" }}
      />{" "}
    </div>
  );
}

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    // speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="m-6 ">
      <br />
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-5xl m-14">GALLERY </h1>
      </div>
      <Slider {...settings} className="m-10">
        <div className="">
          <img
            className="transition  p-10 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
            src="https://images.pexels.com/photos/33825/milky-way-rocks-night-landscape.jpg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="">
          <img
            className="transition  p-10 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
            src="https://images.pexels.com/photos/15173122/pexels-photo-15173122.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
        <div className="">
          <img
            className="transition  p-10 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
            src="https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="">
          <img
            className="transition  p-10 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
            src="https://images.pexels.com/photos/14930425/pexels-photo-14930425.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
        <div className="">
          <img
            className="transition  p-10 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
            src="https://images.pexels.com/photos/15173122/pexels-photo-15173122.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
        <div>
          <img
            className="transition  p-10 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
            src="https://images.pexels.com/photos/14005887/pexels-photo-14005887.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
        <div className="">
          <img
            className="transition  p-10 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
            src="https://images.pexels.com/photos/15173122/pexels-photo-15173122.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
        <div className="">
          <img
            className="transition  p-10 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
            src="https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
