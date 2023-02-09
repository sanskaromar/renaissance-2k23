import React from "react";
import logo from "./logo.png";

const navItems = [
  "home",
  "speakers",
  "schedule",
  "location",
  "blog",
  "contact",
];

const Hamburger = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="white"
    className="w-10 h-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

function Navbar() {
  return (
    // navbar component
    <nav className="w-full bg-custom-dark flex flex-row z-50 fixed">
      {/* logo  */}
      <div className="logo px-12 py-8 flex justify-center items-center">
        <a href="#">
          <img className="cursor-pointer" src={logo} alt="Renaissance Logo" />
        </a>
      </div>

      {/* Navigation Menu  */}
      <div className="container hidden md:flex justify-center px-12">
        <ul className="text-custom-nav text-xs flex flex-row justify-center items-center">
          {navItems.map((item) => (
            <a
              href="#"
              className="mx-4 px-2 relative before:content-[''] before:absolute before:bg-custom-accent before:h-[3px] before:w-0 before:left-0 before:bottom-[-8px] before:transition-[0.3s] before:duration-300 hover:before:w-full hover:text-custom-secondary"
            >
              <li className="font-light cursor-pointer" key={`link-${item}`}>
                {item.toUpperCase()}
                {/* <div />
            <Link to={`${item}`} smooth={true} duration={500}>
              {item}
            </Link> */}
              </li>
            </a>
          ))}
          <a
            href="#"
            className="mx-4 px-6 py-4 bg-custom-secondary text-custom-dark font-bold hover:bg-custom-accent"
          >
            <li className="cursor-pointer">CONFIRM YOUR SEAT</li>
          </a>
        </ul>
      </div>

      {/* Hamburger Navigation Menu  */}
      <div className="md:hidden fixed top-0 left-0 right-0 p-1 w-screen h-[80%] flex justify-end items-end flex-col bg-custom-dark opacity-90 shadow-lg">
        {Hamburger}
        <ul className="m-0 p-0 h-full w-full text-custom-nav text-xs flex flex-col justify-center items-center">
          {navItems.map((item) => (
            <li className="mx-10 my-4 cursor-pointer" key={`link-${item}`}>
              <a href="#" className="text-xl font-light text-custom-light">
                {item.toUpperCase()}
              </a>
            </li>
          ))}

          <li className="mx-10 my-10 p-4 cursor-pointer bg-custom-secondary">
            <a href="#" className="text-xl font-bold text-custom-accent">
              CONFIRM YOUR SEAT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
