import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function About() {
  //to set state for numbers counting up on scrolling
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div>
      {/* div for the main section */}
      <div className="relative bg-[#354F52] h-screen">
        <div className="font-['Raleway'] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl sm:text-6xl text-left text-[#84A98C]">
          RENAISSANCE <br />
          <span className=" text-white">7.0</span>
        </div>
      </div>
      {/* div for the about section */}
      <div className="md:flex md:flex-row md:items-center md:h-[30rem]">
        {/* div for seat confirmation and heading */}
        <div className="relative h-[18rem] md:w-1/3 md:h-[30rem]">
          <div className="text-4xl font-['Raleway'] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left text-[#354F52] ">
            ABOUT
            <br />
            DESIGN
            <br />
            WEEK
            <br />
            <button className="text-left text-[12px] text-white bg-[#354F52] p-2 hover:bg-[#2F3E46] md:w-[10rem]">
              CONFIRM YOUR SEAT -{">"}
            </button>
          </div>
        </div>
        {/* description  */}
        <div className="md:w-2/3 md:h-[30rem] md:py-20 md:px-12">
          <div className="w-full lg:w-3/4">
            <div className="text-[#2F3E46] text-left p-12">
              Renaissance is the annual entrepreneurial summit of MNNIT
              Allahabad that provides a platform for aspiring entrepreneurs to
              encourage the entrepreneurial journey of translating thoughts into
              action. Renaissance includes a gamut of activities all of which
              provide an avenue to harbor entrepreneurial skills and stimulate
              discussion on ideas that possess the potential to turn the issues
              that plague us into opportunities.{" "}
            </div>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
              className="text-[#354F52] flex flex-row px-12"
            >
              <div className="pb-12 w-1/3 text-left">
                {counterOn && (
                  <CountUp
                    className="text-2xl"
                    start={0}
                    end={8}
                    duration={1}
                    delay={0}
                  />
                )}
                +<br />
                Events
              </div>
              <div className="pb-12 w-1/3  text-left">
                {counterOn && (
                  <CountUp
                    className="text-2xl"
                    start={0}
                    end={9}
                    duration={1}
                    delay={0}
                  />
                )}
                +<br />
                Speakers
              </div>
              <div className="pb-12 w-1/3  text-left">
                {counterOn && (
                  <CountUp
                    className="text-2xl"
                    start={0}
                    end={25}
                    duration={1}
                    delay={0}
                  />
                )}
                +<br />
                Sponsors
              </div>
            </ScrollTrigger>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
