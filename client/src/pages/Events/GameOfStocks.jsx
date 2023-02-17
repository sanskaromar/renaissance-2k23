import Navbar from "../../components/Navbar/Navbar";
import EventFooter from "./Footer/EventFooter";
import Carousel from "./Carousel/Carousel";
import "./Style/Events.css";
import img from "../../assets/EventPage/gameofstocks.svg";

const GameOfStocks = () => {
  return (
    <div>
      <Navbar />
      <div
        id="Heading"
        className="bg-custom-dark text-center py-[50px] sm:flex sm:flex-col lg:flex lg:flex-row justify-center items-center"
      >
        <div className="xlsm:h-[330px] xs:h-[250px] lg:h-[160px] mb-[285px] z-10 w-full text-center xlsm:text-5xl xs:text-4xl sm:text-5xl lg:text-8xl font-bold text-custom-secondary tracking-wide absolute">
          GAME OF STOCKS
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
          Without putting any money at risk, one can experience the thrills and
          spills of investing. Learn the fundamentals of the stock market while
          competing for rewards through hands-on study of economics and
          financial topics
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
            <div>
              <p className="text-lg w-full text-left">Stock Gro app link</p>
              <p className="mt-[30px] text-lg w-full text-left">D2C LINK</p>
              <p className="mt-[30px]">
                Participants need to register before 11:59 pm, 18th March, 2022.
                Registration has to be done using the link D2C link
              </p>
              <p className="mt-[30px]">
                The contact number used while registering will be used while
                logging into the StockGro application to get access to the
                league
              </p>
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
              <span className="ml-[10px]">
                Event is open to all. Participants have to apply in a team of 2
              </span>
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
                Cross branch teams are allowed whereas cross college or cross
                year teams are not allowed
              </span>
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
                Plagiarism, Religious/Political/Racial content and hate speeches
                are absolutely prohibited. Any of these will lead to
                disqualification. Already posted content should not be reposted
              </span>
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
                The judging criterias will be creativity, originality, Instagram
                insights(accounts engaged, likes, etc.), correctness of content,
                relevance to the theme, quality and design sense(posters and
                reels)
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

export default GameOfStocks;
