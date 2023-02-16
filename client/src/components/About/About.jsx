import Counter from "./Counter";

function About() {
  //to set state for numbers counting up on scrolling
  return (
    <div>
      {/* div for the main section */}
      <div className="relative bg-[#354F52] h-screen ">
        <div className="font-['Raleway'] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl sm:text-6xl text-left text-[#84A98C]">
          RENAISSANCE <br />
          <span className=" text-white">7.0</span>
        </div>
        <div className="absolute bottom-[5rem] right-[2rem] md:right-[5rem] text-white font-['Raleway'] text-right text-xs">
          <span className="text-xl sm:text-2xl md:text-4xl">12 AUG 2021</span>
          <br />
          <span className="">3968 CARSON STREET, SAN DIEGO, CA 92101</span>
          <br />
          <button className="p-3 border-2 border-white mt-6 shadow-[inset_0_0_0_0_rgb(132,169,140)] hover:border-[#84A98C] hover:shadow-[inset_15em_0_0_0_rgb(132,169,140)] transition ease-in-out delay-50 duration-300">
            BUY TICKET
          </button>
        </div>
      </div>
      {/* div for the about section */}
      <div className="md:flex md:flex-row md:items-center md:h-[30rem]">
        {/* div for seat confirmation and heading */}
        <div className="relative h-[18rem] md:w-1/3 md:h-[30rem]">
          <div className="text-4xl font-['Raleway'] absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-1/2 text-[#354F52] ">
            ABOUT
            <br />
            DESIGN
            <br />
            WEEK
            <br />
            <button className="text-left text-[12px] text-white bg-[#354F52] p-2 hover:bg-[#2F3E46] md:w-[10rem]">
              CONFIRM YOUR SEAT &rarr;
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
            <div className="text-[#354F52] flex flex-row px-12 text-sm sm:text-xl md:text-2xl">
              <div className="pb-12 w-1/3 text-left ">
                <div className="text-3xl font-semibold text-[#1D2630]">
                  <Counter last={8} />
                </div>
                Events
              </div>
              <div className="pb-12 w-1/3  text-left">
                <div className="text-3xl font-semibold text-[#1D2630]">
                  <Counter last={9} />
                </div>
                Speakers
              </div>
              <div className="pb-12 w-1/3  text-left ">
                <div className="text-3xl font-semibold text-[#1D2630]">
                  <Counter last={25} />
                </div>
                Sponsors
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
