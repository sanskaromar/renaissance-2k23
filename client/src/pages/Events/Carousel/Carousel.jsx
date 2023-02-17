import { useState } from "react";
import "./Carousel.css";

import img1 from "../../../assets/EventComponent/One.jpg";
import img2 from "../../../assets/EventComponent/Two.jpg";
import img3 from "../../../assets/EventComponent/Three.jpg";
import img4 from "../../../assets/EventComponent/Four.jpeg";
import img5 from "../../../assets/EventComponent/Five.jpg";

const Carousel = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="carousel bg-custom-secondary pb-[70px] pt-[45px]">
      <div className="text-center font-semibold text-4xl mb-[45px] tracking-wide">
        GALLERY
      </div>
      <section className="mb-[40px] relative z-0" id="slider">
        <div
          className={
            open === false
              ? "bg-black z-10 opacity-[80%] h-full w-full absolute text-white flex justify-center items-center text-2xl"
              : "hidden"
          }
          onClick={() => setOpen(true)}
        >
          DOUBLE TAP TO OPEN
        </div>
        <input type="radio" name="slider" id="s1" />
        <input type="radio" name="slider" id="s2" />
        <input
          type="radio"
          name="slider"
          id="s3"
          // checked
          onChange={(e) => e.target.checked}
        />
        <input type="radio" name="slider" id="s4" />
        <input type="radio" name="slider" id="s5" />

        <label for="s1" id="slide1">
          <img className="h-full w-full" src={img1} />
        </label>

        <label for="s2" id="slide2">
          <img className="h-full w-full" src={img2} />
        </label>

        <label for="s3" id="slide3">
          <img className="h-full w-full" src={img3} />
        </label>

        <label for="s4" id="slide4">
          <img className="h-full w-full" src={img4} />
        </label>

        <label for="s5" id="slide5">
          <img className="h-full w-full" src={img5} />
        </label>
      </section>
      <div className="flex justify-center">
        <button className="bg-custom-accent mt-5 px-3 py-3 pl-4 w-50 text-left rounded-sm font-semibold flex justify-left items-center hover:bg-custom-secondary transition ease-in-out duration-700">
          CONFIRM YOUR SEAT
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="ml-1 w-7 h-6"
          >
            <path
              strokeLinecap="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
