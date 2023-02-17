import Navbar from "../../components/Navbar/Navbar";
import EventFooter from "./Footer/EventFooter";
import Carousel from "./Carousel/Carousel";
import "./Style/Events.css";
import img from "../../assets/EventPage/nayak.svg";

const Nayak = () => {
  return (
    <div>
      <Navbar />
      <div
        id="Heading"
        className="bg-custom-dark pt-[150px] text-center py-[50px] sm:flex sm:flex-col lg:flex lg:flex-row justify-center items-center"
      >
        <div className="xlsm:h-[340px] xs:h-[330px] lg:h-[220px] mb-[285px] z-10 w-full text-center xlsm:text-7xl xs:text-7xl sm:text-8xl lg:text-9xl font-bold text-custom-secondary tracking-wide absolute">
          NAYAK
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
          An event where the participants will be tested on their unique
          problem-solving approach to a business challenge. It will consist of
          two rounds to test the entrepreneurial and analytical skills after
          being handed over the position of CEO of the company
        </div>
      </div>
      <div className="">
        <div
          id="Format"
          className="bg-custom-dark lg:flex lg:flex-row sm:flex sm:flex-col justify-center items-center pt-10"
        >
          <div
            id="FormatHead"
            className="w-1/2 lg:pl-40 xl:pl-60 lg:pr-10 xl:pr-10 lg:py-10 sm:pb-8 flex justify-center items-center text-4xl font-semibold tracking-wide text-gray-300"
          >
            FORMAT
          </div>
          <div className="w-1/2 lg:pr-40 xl:pr-70 lg:pl-10 xl:pl-10 lg:py-10 sm:pb-10 flex flex-col justify-center items-center text-gray-300">
            <div className="text-semibold text-xl text-left w-full tracking-wide pb-3">
              Nayak will consist of 2 round
            </div>
            <div className="text-left w-full tracking-wide mt-[10px] flex">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </span>
              <span className="ml-[10px]">
                Round 1 is a business quiz round in which elimination will take
                place and top 10 teams will qualify
              </span>
            </div>
            <div className="text-left w-full tracking-wide mt-[5px] flex">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </span>
              <span className="ml-[10px]">
                Round 2 is a PPT round in which all 10 teams have to present a
                case study
              </span>
            </div>
            <div className="text-left w-full tracking-wide mt-[5px] flex">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </span>
              <span className="ml-[10px]">
                Judging criteria for Round 2 will be relevancy of solution of
                problem statement in real world
              </span>
            </div>
            <div className="text-left w-full tracking-wide mt-[5px] flex">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </span>
              <span className="ml-[10px]">
                Teams will be finally judged on the combined scores of Round 1
                and Round 2
              </span>
            </div>
          </div>
        </div>
        <div
          id="Rules"
          className="bg-custom-dark sm:flex sm:flex-col justify-center items-center lg:flex lg:flex-row pb-10"
        >
          <div
            id="RulesHead"
            className="sm:w-full lg:w-1/2 lg:pl-40 xl:pl-60 lg:pr-10 xl:pr-10 sm:pt-10 lg:py-10 flex justify-center items-center text-4xl font-semibold tracking-wide text-gray-300"
          >
            RULES AND REGULATIONS
          </div>
          <div className="w-1/2 lg:pr-40 xl:pr-70 lg:pl-10 sm:pb-10 sm:pt-8 lg:py-10 flex flex-col justify-center items-center text-gray-300">
            <div className="text-left w-full tracking-wide mt-[5px] flex">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </span>
              <span className="ml-[10px]">This event is open to all</span>
            </div>
            <div className="text-left w-full tracking-wide mt-[30px] flex">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </span>
              <span className="ml-[10px]">
                Individual participation or a team of 4 is allowed
              </span>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
      <EventFooter />
    </div>
  );
};

export default Nayak;
