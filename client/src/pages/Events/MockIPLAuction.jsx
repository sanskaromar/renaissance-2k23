import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import EventFooter from "./EventFooter";
import img from "../../assets/EventPage/mockiplauction.svg";

//Carousel
import img1 from "../../assets/EventComponent/One.jpg";
import img2 from "../../assets/EventComponent/Two.jpg";
import img3 from "../../assets/EventComponent/Three.jpg";
import img4 from "../../assets/EventComponent/Four.jpeg";
import img5 from "../../assets/EventComponent/Five.jpg";

const MockIPLAuction = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="bg-custom-dark text-center py-[50px] flex justify-center items-center">
        <div className="h-[130px] mb-[240px] z-10 w-full text-right text-8xl font-bold text-custom-secondary pr-[135px] tracking-wide absolute">
          <span className="text-custom-dark">MOCK </span>IPL AUCTION
        </div>
        <div className="bg-white h-[500px] flex items-end relative mr-[110px] w-[500px] z-0">
          <div className="w-full h-full opacity-[30%] bg-black absolute"></div>
          <img className="bg-white" src={img} alt="" srcset="" />
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
          The most enthralling event where participants can make their dream
          squad by bidding on the players they want. If bets aren't placed
          carefully, the winner gets it all
        </div>
      </div>
      <div className="">
        <div className="bg-custom-dark flex pt-10 pb-10">
          <div className="w-1/2 pl-80 pr-10 py-10 flex flex-col justify-center items-center text-gray-300">
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
            <p className="mt-[30px]">
              The decision of the organizers and the judges will be final and
              binding
            </p>
          </div>
          <div className="w-1/2 pr-80 pl-10 py-10 flex justify-center items-center text-4xl font-semibold tracking-wide text-gray-300">
            FORMAT
          </div>
        </div>
        {/* <div className="bg-custom-dark flex pb-10">
          <div className="w-1/2 pl-40 pr-10 py-10 flex justify-center items-center text-4xl font-semibold tracking-wide text-gray-300">
            RULES AND REGULATIONS
          </div>
          <div className="w-1/2 pr-40 pl-10 py-10 flex justify-center items-center text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
            libero? Accusantium optio, tempora velit ratione officia repellendus
            dolor dolores et praesentium, soluta sit quaerat totam aut
            laboriosam? Consequuntur dolores vel ea expedita numquam voluptas,
            ut odit sed laborum dolore, corporis magni harum. Quam fugiat
            reiciendis officia iure! Hic, recusandae fugiat saepe vel fugit,
            assumenda voluptatum minima ullam voluptatem debitis nobis unde
            adipisci iure quas provident velit ipsa aspernatur ea obcaecati
            aliquid. Alias natus sed error repudiandae, quas sit nostrum
            corrupti. Sapiente iste fugit quaerat, dolores vero voluptas odit
            repellendus voluptate, tempora sequi corrupti atque provident minus
            inventore, aperiam fugiat nemo!
          </div>
        </div> */}
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

export default MockIPLAuction;
