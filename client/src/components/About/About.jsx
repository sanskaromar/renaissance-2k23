import React from "react";

function About() {
  return (
    <div>
      <div className="relative bg-[#354F52] h-screen">
        <div className="font-['Raleway'] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl sm:text-6xl text-left text-[#84A98C]">
          RENAISSANCE <br />
          <span className=" text-white">7.0</span>
        </div>
      </div>
      <div className="md:flex md:flex-row md:items-center md:h-[30rem]">
        <div className="relative h-[18rem] md:w-[140rem] md:h[rem]">
          <div className="text-4xl font-['Raleway'] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left text-[#354F52] ">
            ABOUT
            <br />
            DESIGN
            <br />
            WEEK
            <br />
            <button className="text-left text-[8px] text-white bg-[#354F52] p-2">
              CONFIRM YOUR SEAT -{">"}
            </button>
          </div>
        </div>
        <div>
          <div className="text-left p-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac
            facilisis nisi. Mauris eros metus, viverra in molestie sit amet,
            pellentesque vel elit. Nunc eget elit et ex ullamcorper gravida sit
            amet eu mi. Duis quis justo orci. Aliquam convallis cursus
            ultricies. Vivamus vitae nunc et nisl scelerisque facilisis in nec
            urna. Nam porta augue vitae lectus ornare blandit. Sed nec purus in
            nunc tincidunt eleifend a vitae sem. Donec iaculis tellus vel est
            molestie, ac mattis neque auctor. Ut gravida libero ac lectus
            fringilla blandit. Quisque euismod lorem vel dolor fermentum
            eleifend. Praesent consectetur tellus ante, in efficitur ex luctus
            nec. Donec at diam tincidunt velit porttitor convallis. Cras dapibus
            quam ipsum, nec ultricies leo pellentesque sed. Nulla facilisi.{" "}
          </div>
          <div>numbers</div>
        </div>
      </div>
    </div>
  );
}

export default About;
