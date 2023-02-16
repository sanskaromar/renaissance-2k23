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
        <div className="Header text-white text-[48px] lg:text-[52px] flex flex-col justify-center align-middle items-center p-4 ">
          <p>We Have Top Executives</p>
          <p>And</p>
          <p>Startup Here</p>
        </div>

        <div className="Content mt-4 mb-4 mr-10 ml-10 lg:ml-28 lg:mr-28 flex pt-10 pb-10  lg:h-[400px] flex-col  lg:flex-row">
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
        </div>

        <div className="footer bg-[#2F3E46] ">
          <div className="flex justify-center items-center">
            <div className="logo w-1/4"></div>

            <div className="Event w-3/4  ">
              <div className="bg-gradient-to-r from-white to-gray-900 mt-20 mb-8 p-0.5 shadow-2xl">
                <div className="bg-[#181818] h-full flex flex-col lg:flex-row pt-10 pb-10 pr-4 pl-4">
                  <div className="flex w-full">
                    <div className="h-80 flex flex-col justify-center text-left pl-10 lg:ml-40">
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
                  </div>

                  <div className="flex  justify-center  w-full lg:mr-80 lg:mt-10 pl-10 ">
                    <div className="h-80 text-white flex flex-col justify-center text-left lg:ml-40">
                      <p>SOCIAL UPDATES</p>
                      <p className="mt-12">
                        You May Wonder : Why This Event Is So Popular
                      </p>

                      <div className="icons justify-around flex h-40 items-center text-3xl  w-full">
                        <div className="bg-[#CAD2C5]  w-12 h-12 rounded-full flex items-center justify-center  shadow-2xl cursor-pointer text-[#2F3E46] mt-2 hover:bg-[#ffffff] hover:mt-0 transition duration-300  hover:text-[#0269DA]">
                          <BsFacebook className="rounded-full shadow-2xl" />
                        </div>
                        <div className="bg-[#CAD2C5]  w-12 h-12 rounded-full flex items-center justify-center  shadow-2xl cursor-pointer text-[#2F3E46] mt-2 hover:bg-[#ffffff] hover:mt-0 transition duration-300 hover:text-[#1C93E4]">
                          <BsTwitter className="shadow-2xl" />
                        </div>
                        <div className="bg-[#CAD2C5]  w-12 h-12 rounded-full flex items-center justify-center  shadow-2xl cursor-pointer text-[#2F3E46] mt-2 hover:bg-[#ffffff] hover:mt-0 transition duration-300  hover:text-[#0B5FBB]">
                          <BsLinkedin className="shadow-2xl" />
                        </div>
                        <div className="bg-[#CAD2C5]  w-12 h-12 rounded-full flex items-center justify-center  shadow-2xl cursor-pointer text-[#2F3E46] mt-2 hover:bg-[#ffffff] hover:mt-0 transition duration-300  hover:text-[#F20000]">
                          <BsYoutube className="shadow-2xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex w-full  lg:items-end justify-end pr-8 pb-5 ">
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
