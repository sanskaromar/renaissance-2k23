import Rajeev from "./Rajeev.jpg";
import Abhilekh from "./Abhilekh.jpg";
import Chetanya from "./chetanya.jpg";
import Mansi from "./Mansi.jpg";
import Gary from "./Gary.png";
import Quote from "./quote.png";
import "./Testimonials.css";

const Testimonials = () => {
  let slideIndex = 1;
  showSlide(slideIndex);
  function moveSlide(moveStep) {
    showSlide((slideIndex += moveStep));
  }
  function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    if (n > slides.length) slideIndex = 1;

    if (n < 1) slideIndex = slides.length;
  }
  const container =
    " touch-none w-90vw max-h-90vh h-calc(90vw*0.5625) max-w-calc(90vh * 0.5625)  m-5 overflow-y-hidden overflow-x-hidden  ";
  const leftArrow =
    "absolute left-2   z-2  hover:cursor-pointer hover:scale-125";
  const rightArrow =
    "absolute right-2   z-2  hover:cursor-pointer hover:scale-125";
  return (
    <div className="">
      <div className=" relative  flex  align-middle overflow-x-hidden overflow-y-hidden w-full items-center bg-[#84A98C] xl:mx-40 lg:mx-40 md:mx-36 sm:mx-20 mb-10 py-10 px-10 my-2">
        {/* left arrow */}
        <div className={leftArrow} onclick={moveSlide(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            color="white"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        {/* container of cards */}
        <div className={container}>
          <div className="slide my-4 ">
            <div
              id="height"
              className="bg-white  rounded-3xl px-4 py-12 relative hover:cursor-pointer hover:scale-95 ease-in-out duration-300 w-full h-full  flex flex-row justify-around hover:shadow-2xl hover:shadow-grey-100"
            >
              <div className="flex flex-col  xl:w-1/2 lg:w-1/2 md:w-1/2 items-center">
                <div className="w-20 h-20 rounded-full mb-2">
                  <img
                    className="object-fit rounded-full"
                    src={Rajeev}
                    alt=""
                  />
                </div>
                <div className="pb-1 mt-8">Rajeev Tripathi</div>
                <div>Director, MNNIT Allahabad</div>
              </div>
              <div className="xl:w-1/2 lg:w-1/2 md:w-1/2">
                <div className="xl:h-90 lg:h-80 md:h-75  ">
                  <div className="mb-4 font-bold text-lg text-center ">
                    Efficient Collaborating
                  </div>
                  <div className="">
                    <p className="text-center px-8 md:px-4 sm:px-1 text-wrap">
                      I duly hope the legacy continues eternally and provide
                      ample opportunities to cater and optimistic demeanor
                      towards being an entrepreneur, surpassing the bars set by
                      the previous endeavours.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-10">
                <img className="w-10 h-10" src={Quote} alt="" />
              </div>
            </div>
          </div>
          <div className="slide my-4">
            <div
              id="height"
              className="bg-white relative rounded-3xl  px-4 py-12 hover:cursor-pointer hover:scale-95 ease-in-out duration-300 w-full h-full flex flex-row justify-around hover:shadow-2xl hover:shadow-grey-100"
            >
              <div>
                <div className="flex flex-col xl:w-1/2 lg:w-1/2 md:w-1/2 items-center">
                  <div className="w-20 h-20 rounded-full mb-2">
                    <img
                      className="object-fill rounded-full"
                      src={Chetanya}
                      alt=""
                    />
                  </div>
                  <div className="pb-1 mt-8">Chetanya Golecha</div>
                  <div>Co-Founder, Water Float</div>
                </div>
              </div>
              <div className="xl:w-1/2 lg:w-1/2 md:w-1/2">
                <div className="xl:h-90 lg:h-80 md:h-75  ">
                  <div className="mb-4 font-bold text-lg text-center">
                    Intuitive Design
                  </div>
                  <div>
                    <p className="text-center px-8 md:px-4 sm:px-1 text-wrap">
                      I would like to give my personal congrats to the entire
                      team of NIT Allahabad for putting up a wonderful event.
                      The attendees were more than ecstatic than what I have
                      ever seen anywhere else and it is this spirit that puts up
                      a favourable stage for people like us to speak/perform.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-10">
                <img className="w-10 h-10" src={Quote} alt="" />
              </div>
            </div>
          </div>
          <div className="slide my-4">
            <div
              id="height"
              className="bg-white relative rounded-3xl px-4 py-12 hover:cursor-pointer hover:scale-95 ease-in-out duration-300 h-full w-full flex flex-row justify-around hover:shadow-2xl hover:shadow-grey-100"
            >
              <div className="flex flex-col xl:w-1/2 lg:w-1/2 md:w-1/2 items-center">
                <div className="w-20 h-20 rounded-full mb-2">
                  <img className="object-fill rounded-full" src={Gary} alt="" />
                </div>
                <div className="pb-1 mt-2">Gary Dalal</div>
                <div>Director, Apptology FZCO</div>
              </div>
              <div className="xl:w-1/2 lg:w-1/2 md:w-1/2">
                <div className="xl:h-90 lg:h-80 md:h-75 sm:h-75 xs:75  ">
                  <div className="mb-4 font-bold text-lg text-center">
                    Mindblowing Service
                  </div>
                  <div>
                    <p className="text-center px-8 md:px-4 sm:px-1 text-wrap">
                      I would like to give my personal congrats to the entire
                      team of NIT Allahabad for putting up a wonderful event.
                      The attendees were more than ecstatic than what I have
                      ever seen anywhere else and it is this spirit that puts up
                      a favourable stage for people like us to speak/perform.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-10">
                <img className="w-10 h-10" src={Quote} alt="" />
              </div>
            </div>
          </div>
          <div className="slide my-4">
            <div
              id="height"
              className="bg-white relative rounded-3xl  px-4 py-12 hover:cursor-pointer hover:scale-95 ease-in-out duration-300 h-full w-full flex flex-row justify-around hover:shadow-2xl hover:shadow-grey-100"
            >
              <div className="flex flex-col xl:w-1/2 lg:w-1/2 md:w-1/2 items-center">
                <div className="w-20 h-20 rounded-full mb-2">
                  <img
                    className="object-fill rounded-full"
                    src={Abhilekh}
                    alt=""
                  />
                </div>
                <div className="pb-1 mt-2">Abhilekh Agarwal</div>
                <div>CTO, Cube26</div>
              </div>

              <div className="xl:w-1/2 lg:w-1/2 md:w-1/2">
                <div className="xl:h-90 lg:h-80 md:h-75 ">
                  <div className="mb-4 font-bold text-lg text-center">
                    Great Effort
                  </div>
                  <div>
                    <p className="text-center px-8 md:px-4 sm:px-1 text-wrap">
                      It was a great effort by Team Renaissance. Greatly
                      appreciated coming back to college. Your hard work and
                      efforts has lead to such successful event.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-10">
                <img className="w-10 h-10" src={Quote} alt="" />
              </div>
            </div>
          </div>
          <div className="slide my-4">
            <div
              id="height"
              className="bg-white relative rounded-3xl px-4 py-12 hover:cursor-pointer hover:scale-95 ease-in-out duration-300w-full h-full flex flex-row justify-around hover:shadow-2xl hover:shadow-grey-100"
            >
              <div className="flex flex-col xl:w-1/2 lg:w-1/2 md:w-1/2 items-center">
                <div className="w-20 h-20 rounded-full mb-2">
                  <img
                    className="object-fill rounded-full"
                    src={Mansi}
                    alt=""
                  />
                </div>
                <div className="pb-1 mt-2">Mansi Matela</div>
                <div>Head Strategy & New Initiatives, SilverPus</div>
              </div>
              <div className="xl:w-1/2 lg:w-1/2 md:w-1/2">
                <div className="xl:h-90 lg:h-80 md:h-75 ">
                  <div className="mb-4 font-bold text-lg text-center">
                    Thrilling Experience
                  </div>
                  <div>
                    <p className="text-center px-8 md:px-4 sm:px-1 text-wrap">
                      I was thrilled to see such an amazing audience. The events
                      were extraordinary and it surely made an impact to many
                      aspiring entrepreneurs. A platform for the genesis of
                      great ideas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-10">
                <img className="w-10 h-10" src={Quote} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* right arrow */}
        <div className={rightArrow} onclick={moveSlide(1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            color="white"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
