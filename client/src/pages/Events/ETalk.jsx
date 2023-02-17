import Navbar from "../../components/Navbar/Navbar";
import EventFooter from "./Footer/EventFooter";
import Carousel from "./Carousel/Carousel";
import "./Style/Events.css";
import img from "../../assets/EventPage/etalk.svg";

const ETalk = () => {
  return (
    <div>
      <Navbar />
      <div
        id="Heading"
        className="bg-custom-dark text-center py-[50px] sm:flex sm:flex-col lg:flex lg:flex-row justify-center items-center"
      >
        <div className="xlsm:h-[270px] xs:h-[220px] lg:h-[160px] mb-[285px] z-10 w-full text-center xlsm:text-7xl xs:text-7xl sm:text-8xl lg:text-9xl font-bold text-custom-secondary tracking-wide absolute">
          E-TALK
        </div>
        <div>
          <div className="lg:mr-[110px] bg-white h-[540px] flex items-end w-[500px] z-0 relative">
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
          Gives a chance to experience the aura of exceptional entrepreneurs and
          industrialists and familiarize with the experience of those
          individuals through live chat and questioning
        </div>
      </div>
      <div className="">
        <div
          id="Format"
          className="bg-custom-dark lg:flex lg:flex-row sm:flex sm:flex-col justify-center items-center pt-10 lg:pb-10 xlsm:pb-20 xs:pb-20 sm:pb-0"
        >
          <div
            id="FormatHead"
            className="w-1/2 lg:pl-40 xl:pl-60 lg:pr-10 xl:pr-10 lg:py-10 sm:pb-8 flex justify-center items-center text-4xl font-semibold tracking-wide text-gray-300"
          >
            FORMAT
          </div>
          <div className="w-1/2 lg:pr-40 xl:pr-70 lg:pl-10 xl:pl-10 lg:py-10 sm:pb-10 flex flex-col justify-center items-center text-gray-300">
            Renaissance 7.0 will consist of 4 insightful speaker sessions. Four
            exceptional entrepreneurs and industrialists will share their
            experiences. After the session, you can personally ask questions and
            quench your thirst about the crust and troughs of being what you
            dream of!
          </div>
        </div>
      </div>
      <Carousel />
      <EventFooter />
    </div>
  );
};

export default ETalk;
