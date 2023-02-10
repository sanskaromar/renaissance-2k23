import React from "react";
import {
  BsFillCheckCircleFill,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import { RiArrowDropUpLine } from "react-icons/ri";
const Footer = () => {
  return (
    <>
      <div className="Page  w-full bg-[#1b1c1c] pt-8">
        <div className="Header text-white text-[48px] lg:text-[52px] flex flex-col justify-center items-center p-4">
          <p className="">We Have Top Executives</p>
          <p className="">And</p>
          <p>Startup Here</p>
        </div>

        <div className="Content m-4 flex pt-10 pb-10  lg:h-[400px] flex-col lg:flex-row">
          <div className="w-[120px] hidden lg:block"></div>

          <div className="flex flex-col lg:flex-row w-full">
            <div className="text-white  w-full flex flex-col justify-around">
              <div className="flex p-4">
                <BsFillCheckCircleFill className="text-[40px] text-[#CAD2C5]  mr-4 text-justify" />
                <p className="text-[24px]  lg:text-[24px]">
                  Through True Rich Attended does no end it his mother since
                </p>
              </div>
              <div className="flex p-4">
                <BsFillCheckCircleFill className="text-[40px] text-[#CAD2C5] mr-4 text-justify" />
                <p className="text-[24px]  lg:text-[24px]">
                  Attended does no end it his mother since real had half every
                </p>
              </div>
              <div className="flex p-4">
                <BsFillCheckCircleFill className="text-[42px] text-[#CAD2C5] mr-4 text-justify" />
                <p className="text-[24px]  lg:text-[24px]">
                  Since real had half every him case in packages enquire we up
                  ecstatic
                </p>
              </div>
            </div>

            <div className="w-full bg-gray-200 h-80 mt-5 mb-5">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/jNF_Vs7Zw-Y"
                title="Renaissance (6.0) || The Annual E-Summit of NIT Allahabad || HUES OF IMAGINATION"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div className="mt-10 lg:w-[120px] flex  items-center lg:items-end justify-center">
            <button className="bg-[#354F52] h-[47px] w-[47px] flex  items-center justify-center shadow-2xl">
              <RiArrowDropUpLine className="text-[30px] text-white" />
            </button>
          </div>
        </div>

        <div className="footer bg-[#2F3E46] ">
          <div className="flex justify-center items-center">
            <div className="logo w-1/4"></div>

            <div className="Event w-3/4  ">
              <div className="bg-gradient-to-r from-white to-gray-900 mt-20 mb-8 p-0.5 shadow-2xl">
                <div className="bg-[#181818] h-full flex flex-col lg:flex-row pt-10 pb-10">
                  <div className="h-80 flex flex-col justify-center ml-20 lg:ml-40">
                    <p className="text-white text-[15px] mt-4 mb-4">
                      EVENT <br></br>DETAILS
                    </p>
                    <p className="text-[#52796F] mt-4 mb-4">
                      January 5 to 9,2019
                    </p>
                    <p className="text-white mt-4 mb-4">
                      66 Road brolyln street BNG 272 new york
                    </p>
                    <p className="text-white mt-4 mb-4">View Map Locations</p>
                  </div>

                  <div className="h-80 text-white flex flex-col justify-center ml-20 lg:ml-40">
                    <p>SOCIAL UPDATES</p>
                    <p className="mt-12">
                      You May Wonder : Why This Event Is So Popular
                    </p>

                    <div className="icons flex h-40 items-center text-3xl">
                      <div className="bg-[#CAD2C5]  w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-2xl">
                        <BsFacebook className=" text-[#2F3E46] rounded-full shadow-2xl" />
                      </div>
                      <div className="bg-[#CAD2C5]  w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-2xl">
                        <BsTwitter className=" text-[#2F3E46] shadow-2xl" />
                      </div>
                      <div className="bg-[#CAD2C5]  w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-2xl">
                        <BsLinkedin className=" text-[#2F3E46] shadow-2xl" />
                      </div>
                      <div className="bg-[#CAD2C5]  w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-2xl">
                        <BsYoutube className=" text-[#2F3E46]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* sdv */}

          <div className=" flex w-full justify-center lg:items-end lg:justify-end pr-8 pb-5 ">
            <button className="bg-[#CAD2C5] h-[47px] w-[47px] flex items-center justify-center shadow-2xl">
              <RiArrowDropUpLine className="text-[30px]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
