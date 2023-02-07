import { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./Events.css";
import eventsData from "./eventsDB";

const Events = () => {
  const [currState, setCurrState] = useState(0);
  const goToNext = (currState) => {
    setCurrState(currState);
  };

  return (
    <div className="bg-custom-dark" id="container-style">
      <div id="description">
        <div className="bg-custom-dark">
          <h1 className="text-gray-300 text-center text-3xl py-10 font-bold pt-16">
            OUR EVENTS
          </h1>
        </div>
        <div className="flex justify-center items-center mx-52">
          <div className="p-10 w-1/2">
            <div className="">
              <h1 className="text-5xl text-gray-400 font-bold mb-8">
                {eventsData[currState].title}
              </h1>
            </div>
            <p className=" text-gray-300 mr-20">{eventsData[currState].body}</p>
            <button className="bg-gray-300 mt-10 p-2 pl-3 w-40 text-left rounded-sm font-semibold flex justify-left items-center">
              READ MORE <ArrowRightAltIcon className="ml-1" />
            </button>
          </div>
          <div className="p-10 w-1/2">
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
              <img className="mb-2" src={eventsData[currState].urlOne} alt="" />
              <img className="mb-2" src={eventsData[currState].urlTwo} alt="" />
              <img
                className="mb-2"
                src={eventsData[currState].urlThree}
                alt=""
              />
              <img
                className="mb-2"
                src={eventsData[currState].urlFour}
                alt=""
              />
              <div id="carousel-boult" className="Gallery mt-5 mr-1">
                {eventsData.map((events, currState) => (
                  <span
                    className="text-gray-400"
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
