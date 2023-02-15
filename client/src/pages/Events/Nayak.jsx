import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import EventFooter from "./EventFooter";
import img from "../../assets/EventPage/nayak.svg";

//Carousel
import img1 from "../../assets/EventComponent/One.jpg";
import img2 from "../../assets/EventComponent/Two.jpg";
import img3 from "../../assets/EventComponent/Three.jpg";
import img4 from "../../assets/EventComponent/Four.jpeg";
import img5 from "../../assets/EventComponent/Five.jpg";

const Nayak = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="bg-custom-dark text-center py-[50px] flex justify-center items-center">
        <div className="h-[200px] mb-[315px] z-10 w-full text-left text-9xl font-bold text-custom-secondary pl-[666px] tracking-wide absolute">
          <span className="text-custom-dark">N</span>AYAK
        </div>
        <div>
          <div className="bg-white h-[590px] flex items-end mr-[110px] w-[500px] z-0 relative">
            <div className="w-full h-full opacity-[30%] bg-black absolute"></div>
            <img className="bg-white" src={img} alt="" srcset="" />
          </div>
        </div>
        <div className="h-[300px] flex items-end">
          <div className="flex flex-col">
            <div className="ml-[110px] text-custom-secondary text-4xl font-semibold">
              24th March, 2022
            </div>
            <div className="ml-[110px] flex justify-end">
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
      <div className="bg-white flex">
        <div className="w-1/2 pl-80 pr-20 py-20 flex justify-center items-center text-4xl font-semibold tracking-wide">
          DESCRIPTION
        </div>
        <div className="w-1/2 pr-80 pl-20 py-20 flex justify-center items-center">
          An event where the participants will be tested on their unique
          problem-solving approach to a business challenge. It will consist of
          two rounds to test the entrepreneurial and analytical skills after
          being handed over the position of CEO of the company
        </div>
      </div>
      <div className="">
        <div className="bg-custom-dark flex pt-10">
          <div className="w-1/2 pl-60 pr-10 py-10 flex flex-col justify-center items-center text-gray-300">
            <div className="text-left w-full">
              Nayak will consist of 2 rounds
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
            <p className="mt-[30px]">
              The decision of the organizers and the judges will be final and
              binding
            </p>
          </div>
          <div className="w-1/2 pr-60 pl-10 py-10 flex justify-center items-center text-4xl font-semibold tracking-wide text-gray-300">
            FORMAT
          </div>
        </div>
        <div className="bg-custom-dark flex pb-10">
          <div className="w-1/2 pl-60 pr-10 py-10 flex justify-center items-center text-4xl font-semibold tracking-wide text-gray-300">
            RULES AND REGULATIONS
          </div>
          <div className="w-1/2 pr-60 pl-10 py-10 flex flex-col justify-center items-center text-gray-300">
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

      <div className="carousel bg-custom-secondary pb-[70px] pt-[45px]">
        <div className="text-center font-semibold text-4xl mb-[45px] tracking-wide">
          GALLERY
        </div>
        <section className="mb-[40px] relative z-0" id="slider">
          <div
            className={
              open === false
                ? "bg-black z-10 opacity-[80%] h-full w-full absolute text-white flex justify-center items-center text-2xl"
                : "hidden"
            }
            onClick={() => setOpen(true)}
          >
            DOUBLE TAP TO OPEN
          </div>
          <input type="radio" name="slider" id="s1" />
          <input type="radio" name="slider" id="s2" />
          <input
            type="radio"
            name="slider"
            id="s3"
            // checked
            onChange={(e) => e.target.checked}
          />
          <input type="radio" name="slider" id="s4" />
          <input type="radio" name="slider" id="s5" />

          <label for="s1" id="slide1">
            <img className="h-full w-full" src={img1} />
          </label>

          <label for="s2" id="slide2">
            <img className="h-full w-full" src={img2} />
          </label>

          <label for="s3" id="slide3">
            <img className="h-full w-full" src={img3} />
          </label>

          <label for="s4" id="slide4">
            <img className="h-full w-full" src={img4} />
          </label>

          <label for="s5" id="slide5">
            <img className="h-full w-full" src={img5} />
          </label>
        </section>
        <div className="flex justify-center">
          <button className="bg-custom-accent mt-5 px-3 py-3 pl-4 w-50 text-left rounded-sm font-semibold flex justify-left items-center hover:bg-custom-secondary transition ease-in-out duration-700">
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
      <EventFooter />
    </div>
  );
};

export default Nayak;
