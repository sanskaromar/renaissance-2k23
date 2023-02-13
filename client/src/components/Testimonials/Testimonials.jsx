import React, { useState, useEffect } from "react";
import data from "./data";
import "./Testimonial.css";
import Quote from "./quote.png";

const Testimonials = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    let slider = setInterval(() => {
      setIndex(index + 1);
      if (index < 0) setIndex(lastIndex);
      if (index === lastIndex) setIndex(0);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index, people]);

  const prevSlide = () => {
    if (index === 0) setIndex(people.length - 1);
    else setIndex(index - 1);
  };
  const nextSlide = () => {
    if (index === people.length - 1) setIndex(0);
    else setIndex(index + 1);
  };

  return (
    <div className=" flex flex-row align-middle overflow-x-hidden overflow-y-hidden w-full h-screen items-center bg-[#84A98C]  py-10 px-10 justify-around">
      {/* prev arrow */}
      <div className="section-left ">
        <button
          className="hover:cursor-pointer hover:scale-125  ease-in-out duration-300 "
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            color="white"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
      {/* container of cards */}
      <div className=" section-center flex items-center touch-none m-8  w-1/2 h-full  overflow-y-hidden overflow-x-hidden ">
        {people.map((item, indexPeople) => {
          const { id, image, name, title, headline, text } = item;
          let position = "nextSlide hidden";
          if (indexPeople === index) position = "activeSlide flex-grow";

          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          )
            position = "lastSlide hidden";

          return (
            <article className={`${position}`} key={id}>
              <div className=" my-2 ">
                <div
                  id="height"
                  className=" bg-white  relative flex flex-col flex-grow rounded-3xl max-w-[60rem] h-full py-12 items-center  xl:flew-row lg: flex-col md:sm:flex-row justify-between"
                >
                  <div className="flex flex-col  xl:w-2/5 lg:w-2/5 md:w-2/5 md:pl-6 items-center">
                    <div className="w-20 h-20 xl:lg:w-40 xl:lg:h-40 md:w-40  sm:w-40 md:h-40 sm:h-40  mb-2 hover:cursor-pointer hover:scale-105 ease-in-out duration-300 ">
                      <img
                        src={image}
                        alt={name}
                        className="person-img object-cover object-center rounded-xl "
                      />
                    </div>
                    <div className="pb-1 text-center font-bold text-lg mt-8">
                      {name}
                    </div>
                    <div className="text-center text-wrap">{title}</div>
                  </div>
                  <div className="h-full xl:w-1/2 lg:w-1/2 md:w-1/2 items-center md:pl-8">
                    <div className="  max-w-[20rem] justify-center">
                      <div className=" sm:mb-1 sm:mt-1 font-bold text-xl text-center ">
                        {headline}
                      </div>
                      <div className="justify-center items-center">
                        <p className="text-center   px-2 xl:lg:md:px-4 sm:px-2 text-wrap">
                          {text}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-10">
                    <img
                      className="w-10 h-10 xl:lg:w-30 xl:lg:h-30 md:w-15 sm:w-15 md:h-15 sm:h-15"
                      src={Quote}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* next arrow */}
      <div className="section-right ">
        <button
          className="hover:cursor-pointer hover:scale-125 ease-in-out duration-300"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            color="white"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Testimonials;
