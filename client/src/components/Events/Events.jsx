import { useEffect, useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./Events.css";
import eventsData from "./eventsDB";

const Events = () => {
  const [currState, setCurrState] = useState(0);
  // const [index1, setIndex1] = useState(1);
  // const [index2, setIndex2] = useState(2);
  // const [index3, setIndex3] = useState(3);
  // const [index4, setIndex4] = useState(4);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currState === 7) setCurrState(0);
      else setCurrState(currState + 1);
      // setIndex1((currState + 1) % 8);
      // setIndex2((index1 + 1) % 8);
      // setIndex3((index2 + 1) % 8);
      // setIndex4((index3 + 1) % 8);
      // setIndex2((((currState + 1) % 8) + 1) % 8);
      // setIndex3((((((currState + 1) % 8) + 1) % 8) + 1) % 8);
      // setIndex4((((((((currState + 1) % 8) + 1) % 8) + 1) % 8) + 1) % 8);
    }, 5000);
    return () => clearTimeout(timer);
  });
  const goToNext = (currState) => {
    setCurrState(currState);
  };

  return (
    <div className="bg-custom-dark" id="container-style">
      <div id="description">
        <div className="bg-custom-dark">
          <h1 className="text-gray-300 text-center text-3xl pb-8 font-bold pt-16">
            OUR EVENTS
          </h1>
        </div>
        <div className="flex justify-center items-center mx-52">
          <div className="pt-10 pl-10 pb-10 w-1/2">
            <div>
              <h1 className="text-5xl text-gray-400 font-bold mb-8">
                {eventsData[currState].title}
              </h1>
            </div>
            <p className=" text-gray-300 mr-20">{eventsData[currState].body}</p>
            <button className="bg-gray-300 mt-10 p-2 pl-3 w-40 text-left rounded-sm font-semibold flex justify-left items-center">
              READ MORE <ArrowRightAltIcon className="ml-1" />
            </button>
          </div>
          <div className="pb-10 pt-10 pr-10 w-1/2">
            <div id="Gallery" className="w-full">
              <div id="carousel-boult" className="Gallery mb-4 mr-2">
                {eventsData.map((events, currState) => (
                  <span
                    className="text-white"
                    key={currState}
                    onClick={() => goToNext(currState)}
                  ></span>
                ))}
              </div>
              <div className="relative">
                <img
                  className="mb-2"
                  // onClick={() => goToNext(index1)}
                  src={eventsData[currState].urlOne}
                  alt=""
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-75 hover:bg-gray-900 transition ease-in-out duration-700">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-white text-lg">
                      {eventsData[(currState + 1) % 8].title}
                      {/* {eventsData[index1].title} */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  className="mb-2"
                  // onClick={() => goToNext(index2)}
                  src={eventsData[currState].urlTwo}
                  alt=""
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-75 hover:bg-gray-900 transition ease-in-out duration-700">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-white text-lg">
                      {eventsData[(((currState + 1) % 8) + 1) % 8].title}
                      {/* {eventsData[index2].title} */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  className="mb-2"
                  // onClick={() => goToNext(index3)}
                  src={eventsData[currState].urlThree}
                  alt=""
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-75 hover:bg-gray-900 transition ease-in-out duration-700">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-white text-lg">
                      {
                        eventsData[(((((currState + 1) % 8) + 1) % 8) + 1) % 8]
                          .title
                      }
                      {/* {eventsData[index3].title} */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  className="mb-2"
                  // onClick={() => goToNext(index4)}
                  src={eventsData[currState].urlFour}
                  alt=""
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-75 hover:bg-gray-900 transition ease-in-out duration-700">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-white text-lg">
                      {
                        eventsData[
                          (((((((currState + 1) % 8) + 1) % 8) + 1) % 8) + 1) %
                            8
                        ].title
                      }
                      {/* {eventsData[index4].title} */}
                    </div>
                  </div>
                </div>
              </div>
              <div id="carousel-boult" className="Gallery mt-5 mr-1">
                {eventsData.map((events, currState) => (
                  <span
                    key={currState}
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
