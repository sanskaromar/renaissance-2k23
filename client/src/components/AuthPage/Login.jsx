//Put all your pages here in decide order

import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsGoogle, BsEyeSlashFill } from "react-icons/bs";
import { AiFillFacebook, AiFillTwitterCircle, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import Background from "./Background";
const img = require("./rene.png");

const Layout = () => {
  const [icon, seticon] = useState(true);
  const show = () => {
    console.log("clicked");
    seticon(!icon);
  };
  return (
    <>
      <Background />
      <div className="relative overflow-hidden bg-back  w-screen h-screen flex justify-center items-center p-[30px] sm:p-[50px] ">
        <div className="p-[10px] sm:p-[30px] opacity-[0.85] z-[100] w-full h-full sm:w-[500px] sm:h-[550px] bg-lgreen flex flex-col rounded">
          <div className="mb-[25px] logo flex flex-col justify-center items-center w-full">
            <img className="w-[50px] h-[50px]" src={img}></img>
            <h1 className="tracking-[1.2px] text-white font-bold mt-[10px] text-lg">
              SIGN-IN
            </h1>
          </div>

          <div>
            <form>
              <div className="mb-[24px] flex">
                <div className="mr-[8px] flex justify-center items-center">
                  <FaUserCircle size="21px" color="#2F3E46" />
                </div>
                <input
                  className="rounded outline-none w-full h-[36px] p-[10px]"
                  placeholder="Username"
                  required
                ></input>
              </div>

              <div className="mb-[3px] flex">
                <div className="mr-[8px] flex justify-center items-center">
                  <RiLockPasswordFill size="21px" color="hsl(217,10%,25%)" />
                </div>
                <input
                  type={icon === true ? "password" : "text"}
                  className="rounded-l-md outline-none w-full h-[36px] p-[10px]"
                  placeholder="Password"
                  required
                ></input>
                <div
                  onClick={show}
                  className="rounded-r-md p-[2.6px] flex justify-center items-center bg-white cursor-pointer"
                >
                  {icon === true ? (
                    <AiFillEye size="20px" color="hsl(217,10%,25%)" />
                  ) : (
                    <BsEyeSlashFill size="20px" color="hsl(217,10%,25%)" />
                  )}
                </div>
              </div>

              <div className="text-end w-full mb-[24px]">
                <a
                  href=""
                  className="text-[11px] text-back font-semibold hover:text-slate-600"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full p-[5px] bg-back text-white rounded-full hover:bg-zinc-600"
              >
                LOG-IN
              </button>
            </form>
          </div>

          <div className="mt-[30px] flex items-center justify-center">
            <p className="tracking-[1px] text-[12px] text-white">
              OR LOGIN USING
            </p>
          </div>

          <div className="mt-[10px] flex items-center justify-center">
            <div className="cursor-pointer mr-[30px] bg-sec p-[4px] hover:rounded-[5000px]  hover:scale-110 transition-all duration-1000 ">
              <AiFillFacebook size="38px" color="#3b5998" />
            </div>
            <div className="cursor-pointer mr-[30px] bg-sec p-[4px] hover:rounded-[5000px] hover:scale-110 transition-all duration-1000 ">
              <BsGoogle size="32px" color="#db3236" />
            </div>
            <div className="cursor-pointer mr-[30px] bg-sec p-[4px] hover:rounded-[5000px]  hover:scale-110 transition-all duration-1000 ">
              <AiFillTwitterCircle size="38px" color="#1DA1F2" />
            </div>
          </div>

          <div className="mt-[30px] flex justify-center items-center">
            <p className="mr-[15px] tracking-[0.6px] text-[14px] text-white">
              Not Registered yet?
            </p>
            <Link
              to="/register"
              className="font-bold ml-[15px] tracking-[1px] text-[14px] text-back hover:text-slate-600"
            >
              Sign-Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
