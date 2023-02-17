import { useEffect, useState, useRef } from "react";
import "./Events.css";
import eventsData from "./eventsDB";

const Events = () => {
  const [currState, setCurrState] = useState(0);
  const [index1, setIndex1] = useState(1);
  const [index2, setIndex2] = useState(2);
  const [index3, setIndex3] = useState(3);
  const [index4, setIndex4] = useState(4);
  const [color, setColor] = useState(0);

  const animateRef = useRef();

  useEffect(() => {
    const clock = setTimeout(() => {
      const applyContainerProperties = () => {
        animateRef.current.classList.add("effect-container");
      };

      animateRef.current.classList.remove("active");
      setTimeout(() => {
        animateRef.current.classList.add("active");
      }, 500);

      applyContainerProperties();

      const cleanupRef = animateRef.current;

      return () => {
        cleanupRef.classList.remove("active");
      };
    }, 10000);
    return () => clearTimeout(clock);
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currState === 7) setCurrState(0);
      else setCurrState(currState + 1);
      setColor((currState + 1) % 8);
      setIndex1((((currState + 1) % 8) + 1) % 8);
      setIndex2((((((currState + 1) % 8) + 1) % 8) + 1) % 8);
      setIndex3((((((((currState + 1) % 8) + 1) % 8) + 1) % 8) + 1) % 8);
      setIndex4(
        (((((((((currState + 1) % 8) + 1) % 8) + 1) % 8) + 1) % 8) + 1) % 8
      );
    }, 11000);
    return () => clearTimeout(timer);
  });

  const goToNext = (currState) => {
    setCurrState(currState);
    setColor(currState);
    setIndex1((currState + 1) % 8);
    setIndex2((((currState + 1) % 8) + 1) % 8);
    setIndex3((((((currState + 1) % 8) + 1) % 8) + 1) % 8);
    setIndex4((((((((currState + 1) % 8) + 1) % 8) + 1) % 8) + 1) % 8);
  };

  return (
    <div className="bg-custom-dark h-screen lg:flex lg:justify-center lg:items-center">
      <div className="bg-custom-dark sm:pb-6 lg:pt-6">
        <div
          className="lg:flex lg:flex-row sm:flex sm:flex-col justify-center items-center xl:mx-44 lg:mx-20 sm:mx-10"
          ref={animateRef}
        >
          <div
            id="photo-detail"
            className="pt-10 lg:pl-10 pb-10 lg:w-1/2 sm:flex sm:flex-col sm:justify-center sm:items-center lg:block"
          >
            <div className="bg-custom-dark">
              <h1
                id="heading"
                className="text-gray-300 sm:text-center lg:text-left text-4xl font-bold mb-10 lg:mb-12 tracking-wide"
              >
                <span className="text-5xl">O</span>UR{" "}
                <span className="text-5xl ml-1">E</span>VENTS
              </h1>
            </div>
            <div className="lg:pr-10">
              <h1
                id="photo-title"
                className="sm:text-4xl lg:text-left lg:text-5xl text-gray-400 font-bold mb-8"
              >
                {eventsData[currState].title}
              </h1>
            </div>
            <p
              id="photo-body"
              className="text-gray-300 sm:px-10 md:px-20 lg:px-0 lg:pr-10 sm:text-center lg:text-left"
            >
              {eventsData[currState].body}
            </p>
            <button className="bg-gray-300 mt-10 p-2 pl-3 w-40 text-left rounded-sm font-semibold flex justify-left items-center hover:bg-custom-secondary transition">
              READ MORE
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
          <div className="pb-10 sm:pt-5 lg:pt-12 lg:pr-10 sm:px-10 lg:px-0 lg:w-1/2">
            <div id="Gallery" className="w-full">
              <div
                id="carousel-boult"
                className="mb-4 flex items-center justify-center"
              >
                {eventsData.map((events, currState) => (
                  <span
                    key={currState}
                    className={
                      currState === color
                        ? "bg-gray-900 hover:cursor-pointer"
                        : "bg-gray-400 hover:cursor-pointer"
                    }
                    onClick={() => goToNext(currState)}
                  ></span>
                ))}
              </div>
              <div className="relative">
                <img
                  className="mb-2"
                  src={eventsData[currState].urlOne}
                  alt=""
                />
                <div
                  onClick={() => goToNext(index1)}
                  className="absolute inset-0 hover:cursor-pointer bg-black bg-opacity-75 hover:bg-gray-900 transition ease-in-out duration-700"
                >
                  <div className="flex h-full items-center justify-center">
                    <div className="text-gray-300 text-lg">
                      {eventsData[index1].title}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  className="mb-2"
                  src={eventsData[currState].urlTwo}
                  alt=""
                />
                <div
                  onClick={() => goToNext(index2)}
                  className="absolute inset-0 hover:cursor-pointer bg-black bg-opacity-75 hover:bg-gray-900 transition ease-in-out duration-700"
                >
                  <div className="flex h-full items-center justify-center">
                    <div className="text-gray-300 text-lg">
                      {eventsData[index2].title}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  className="mb-2"
                  src={eventsData[currState].urlThree}
                  alt=""
                />
                <div
                  onClick={() => goToNext(index3)}
                  className="absolute inset-0 hover:cursor-pointer bg-black bg-opacity-75 hover:bg-gray-900 transition ease-in-out duration-700"
                >
                  <div className="flex h-full items-center justify-center">
                    <div className="text-gray-300 text-lg">
                      {eventsData[index3].title}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  className="mb-2"
                  src={eventsData[currState].urlFour}
                  alt=""
                />
                <div
                  onClick={() => goToNext(index4)}
                  className="absolute inset-0 hover:cursor-pointer bg-black bg-opacity-75 hover:bg-gray-900 transition ease-in-out duration-700"
                >
                  <div className="flex h-full items-center justify-center">
                    <div className="text-gray-300 text-lg">
                      {eventsData[index4].title}
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="carousel-boult"
                className="mt-4 flex items-center justify-center"
              >
                {eventsData.map((events, currState) => (
                  <span
                    key={currState}
                    className={
                      currState === color
                        ? "bg-gray-900 hover:cursor-pointer"
                        : "bg-gray-400 hover:cursor-pointer"
                    }
                    onClick={() => goToNext(currState)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
