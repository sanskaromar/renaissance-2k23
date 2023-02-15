import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import EventFooter from "./EventFooter";
import img from "../../assets/EventPage/etalk.svg";

//Carousel
import img1 from "../../assets/EventComponent/One.jpg";
import img2 from "../../assets/EventComponent/Two.jpg";
import img3 from "../../assets/EventComponent/Three.jpg";
import img4 from "../../assets/EventComponent/Four.jpeg";
import img5 from "../../assets/EventComponent/Five.jpg";

const ETalk = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="bg-custom-dark text-center py-[50px] flex justify-center items-center">
        <div className="h-[200px] mb-[200px] z-10 w-full text-left text-9xl font-bold text-custom-secondary pl-[643px] tracking-wide absolute">
          <span className="text-custom-dark">E-</span>TALK
        </div>
        <div>
          <div className="mr-[110px] w-[500px] z-0 relative">
            <div className="w-full h-full opacity-[30%] bg-black absolute"></div>
            <img
              className="bg-white w-full h-[510px]"
              src={img}
              alt=""
              srcset=""
            />
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
          Gives a chance to experience the aura of exceptional entrepreneurs and
          industrialists and familiarize with the experience of those
          individuals through live chat and questioning
        </div>
      </div>
      <div className="">
        <div className="bg-custom-dark flex pt-10 pb-10">
          <div className="w-1/2 pl-80 pr-10 py-10 flex justify-center items-center text-gray-300">
            Renaissance 7.0 will consist of 4 insightful speaker sessions. Four
            exceptional entrepreneurs and industrialists will share their
            experiences. After the session, you can personally ask questions and
            quench your thirst about the crust and troughs of being what you
            dream of!
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

export default ETalk;
