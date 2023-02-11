import React, { useState, useEffect } from "react";
import data from "./data";
import "./Testimonial.css";
import Quote from "./quote.png";

const Testimonials = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) setIndex(lastIndex);

    if (index > lastIndex) setIndex(0);
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="relative align-middle overflow-x-hidden overflow-y-hidden w-full h-screen items-center bg-[#84A98C] xl:mx-40 lg:mx-40 md:mx-36 sm:mx-20 mb-10 py-10 px-10 my-2">
      {/* prev arrow */}
      <button className="prev" onClick={() => setIndex(index - 1)}>
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
      {/* container of cards */}
      <div className="section-center touch-none w-full h-full  flex  overflow-y-hidden overflow-x-hidden ">
        {people.map((item, indexPeople) => {
          const { id, image, name, title, headline, text } = item;
          let position = "nextSlide";
          if (indexPeople === index) position = "activeSlide";

          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          )
            position = "lastSlide";

          return (
            <article className={position} key={id}>
              <div className=" my-4 ">
                <div
                  id="height"
                  className="bg-white  rounded-3xl px-4 py-12 relative hover:cursor-pointer hover:scale-95 ease-in-out duration-300 w-full h-full flex xl:flew-row lg:md: flex-col  sm:flex-row  justify-around hover:shadow-2xl hover:shadow-grey-100"
                >
                  <div className="flex flex-col  xl:w-1/2 lg:w-1/2 md:w-1/2 items-center">
                    <div className="w-20 h-20 rounded-full mb-2">
                      <img
                        src={image}
                        alt={name}
                        className="person-img object-fit rounded-full "
                      />
                    </div>
                    <div className="pb-1 mt-8">{name}</div>
                    <div>{title}</div>
                  </div>
                  <div className="xl:w-1/2 lg:w-1/2 md:w-1/2">
                    <div className="xl:h-90 lg:h-80 md:h-75  ">
                      <div className="mb-4 mt-4 font-bold text-lg text-center ">
                        {headline}
                      </div>
                      <div>
                        <p className="text-center px-8 md:px-4 sm:px-1 text-wrap">
                          {text}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-10">
                    <img className="w-10 h-10" src={Quote} alt="" />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* next arrow */}
      <button className="next" onClick={() => setIndex(index + 1)}>
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
  );
};
export default Testimonials;
