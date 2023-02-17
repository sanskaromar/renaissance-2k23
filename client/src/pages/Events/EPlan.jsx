import Navbar from "../../components/Navbar/Navbar";
import EventFooter from "./Footer/EventFooter";
import Carousel from "./Carousel/Carousel";
import "./Style/Events.css";
import img from "../../assets/EventPage/eplan.svg";

const EPlan = () => {
  return (
    <div>
      <Navbar />
      <div
        id="Heading"
        className="bg-custom-dark pt-[150px] text-center py-[50px] sm:flex sm:flex-col lg:flex lg:flex-row justify-center items-center"
      >
        <div className="xlsm:h-[400px] xs:h-[370px] sm:h-[350px] lg:h-[260px] mb-[285px] z-10 w-full text-center xlsm:text-7xl xs:text-7xl sm:text-7xl lg:text-9xl font-bold text-custom-secondary tracking-wide absolute">
          E-PLAN
        </div>
        <div>
          <div className="lg:mr-[110px] bg-white h-[640px] flex items-end w-[500px] z-0 relative">
            <div className="w-full h-full opacity-[30%] bg-black absolute"></div>
            <img className="bg-white" src={img} alt="" srcset="" />
          </div>
        </div>
        <div className="lg:h-[300px] flex lg:items-end sm:pt-10">
          <div
            id="Participate"
            className="flex flex-col justify-center items-center"
          >
            <div className="sm:ml-[110px] text-custom-secondary text-4xl font-semibold">
              24th March, 2022
            </div>
            <div className="sm:ml-[110px] flex justify-end">
              <button className="bg-custom-secondary mt-5 px-3 py-3 pl-4 w-50 text-left rounded-sm font-semibold flex justify-left items-center hover:bg-custom-accent transition ease-in-out duration-700">
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
        </div>
      </div>
      <div
        id="Description"
        className="bg-white sm:flex sm:flex-col justify-center items-center lg:flex lg:flex-row"
      >
        <div
          id="DesHead"
          className="w-1/2 lg:pl-40 xl:pl-80 lg:pr-10 xl:pr-20 lg:py-20 sm:pt-10 sm:pb-5 flex justify-center items-center text-4xl font-semibold tracking-wide"
        >
          DESCRIPTION
        </div>
        <div className="w-1/2 lg:pr-40 xl:pr-70 lg:pl-10 lg:py-10 sm:pb-10 sm:text-center flex justify-center items-center">
          Provides an opportunity for aspiring entrepreneurs to propose their
          business ideas and get cash and mentoring from industry experts
        </div>
      </div>
      <div className="">
        <div
          id="Format"
          className="bg-custom-dark lg:flex lg:flex-row sm:flex sm:flex-col justify-center items-center pt-10 lg:pb-10 xlsm:pb-20 xs:pb-20 sm:pb-0"
        >
          <div
            id="FormatHead"
            className="lg:hidden w-1/2 lg:pl-40 xl:pl-60 lg:pr-10 xl:pr-10 lg:py-10 sm:pb-8 flex justify-center items-center text-4xl font-semibold tracking-wide text-gray-300"
          >
            FORMAT
          </div>
          <div className="w-1/2 lg:pl-40 xl:pl-70 lg:pr-10 xl:pr-10 lg:py-10 sm:pb-10 flex flex-col justify-center items-center text-gray-300">
            E-Plan will consist of 5 rounds. Round 1 is an elimination round in
            which the teams need to submit the abstract. Selected teams from the
            first round will be given feedback and mentoring in round 2. In
            round 3, teams need to give powerpoint presentations and pitch their
            ideas. Selected teams will submit their final ppts in round 4. In
            the 5th and final round, teams need to pitch their ideas and give a
            final presentation in front of judges
          </div>
          <div
            id="FormatHeadDown"
            className="w-1/2 lg:pr-40 xl:pr-60 lg:pl-10 xl:pl-10 lg:py-10 sm:pb-8 flex justify-center items-center text-4xl font-semibold tracking-wide text-gray-300"
          >
            FORMAT
          </div>
        </div>
      </div>
      <Carousel />
      <EventFooter />
    </div>
  );
};

export default EPlan;
