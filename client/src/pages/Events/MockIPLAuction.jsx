import Navbar from "../../components/Navbar/Navbar";
import EventFooter from "./Footer/EventFooter";
import Carousel from "./Carousel/Carousel";
import "./Style/Events.css";
import img from "../../assets/EventPage/mockiplauction.svg";

const MockIPLAuction = () => {
  return (
    <div>
      <Navbar />
      <div
        id="Heading"
        className="bg-custom-dark pt-[150px] text-center py-[50px] sm:flex sm:flex-col lg:flex lg:flex-row justify-center items-center"
      >
        <div className="xlsm:h-[330px] xs:h-[250px] lg:h-[160px] mb-[285px] z-10 w-full text-center xlsm:text-5xl xs:text-4xl sm:text-5xl lg:text-8xl font-bold text-custom-secondary tracking-wide absolute">
          MOCK IPL AUCTION
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
          The most enthralling event where participants can make their dream
          squad by bidding on the players they want. If bets aren't placed
          carefully, the winner gets it all
        </div>
      </div>
      <div className="">
        <div
          id="Format"
          className="bg-custom-dark lg:flex lg:flex-row sm:flex sm:flex-col justify-center items-center pt-10"
        >
          <div
            id="FormatHead"
            className="lg:hidden w-1/2 lg:pl-40 xl:pl-60 lg:pr-10 xl:pr-10 lg:py-10 sm:pb-8 flex justify-center items-center text-4xl font-semibold tracking-wide text-gray-300"
          >
            FORMAT
          </div>
          <div className="w-1/2 lg:pl-40 xl:pl-70 lg:pr-10 xl:pr-10 lg:py-10 sm:pb-10 flex flex-col justify-center items-center text-gray-300">
            <div>
              Mock IPL auction will consist of 2 rounds. Round 1 is a general
              quiz round in which teams of 4 can participate out of which top 8
              teams will qualify for the auction(Round 2). In Round 2, all 8
              teams will be provided with a fixed virtual amount to buy their
              favorite players who in turn will have certain points for their
              batting, bowling and fielding. All players will have a base price
              and the participants will aim to form a team with the maximum
              points
            </div>
            <div className="text-semibold text-xl text-left w-full tracking-wide mt-[30px]">
              Teams will be judged on:
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
              <span className="ml-[10px]">Their final team score</span>
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
                The amount of money left with them post-auction
              </span>
            </div>
            <p className="mt-[30px] lg:pb-10 text-left w-full xlsm:pb-20 xs:pb-20 sm:pb-0">
              The decision of the organizers and the judges will be final and
              binding
            </p>
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

export default MockIPLAuction;
