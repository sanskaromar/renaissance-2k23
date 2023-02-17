import { BsFacebook, BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs";
import { RiArrowDropUpLine } from "react-icons/ri";

const EventFooter = () => {
  return (
    <div>
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
                      <div className="bg-[#CAD2C5]  w-12 h-12 rounded-full flex items-center justify-center  shadow-2xl">
                        <BsFacebook className=" text-[#2F3E46] rounded-full shadow-2xl" />
                      </div>
                      <div className="bg-[#CAD2C5]  w-12 h-12 rounded-full flex items-center justify-center  shadow-2xl">
                        <BsTwitter className=" text-[#2F3E46] shadow-2xl" />
                      </div>
                      <div className="bg-[#CAD2C5]  w-12 h-12 rounded-full flex items-center justify-center  shadow-2xl">
                        <BsLinkedin className=" text-[#2F3E46] shadow-2xl" />
                      </div>
                      <div className="bg-[#CAD2C5]  w-12 h-12 rounded-full flex items-center justify-center  shadow-2xl">
                        <BsYoutube className=" text-[#2F3E46]" />
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
  );
};

export default EventFooter;
