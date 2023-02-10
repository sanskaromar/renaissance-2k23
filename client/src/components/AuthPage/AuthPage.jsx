import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsEyeSlashFill, BsGenderAmbiguous } from "react-icons/bs";
import { AiOutlineMail, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import Background from "./Background";
const img = require("./rene.png");

const Register = () => {
  const [icon, seticon] = useState(true);

  const show = () => {
    seticon(!icon);
  };
  return (
    <>
      <Background />
      <div className="bg-back w-screen h-screen flex justify-center p-[50px] items-center p-[14px] sm:p-[50px]">
        <div className=" w-screen opacity-[0.85] z-[100] sm:w-[500px] sm:h-[610px] bg-lgreen flex flex-col rounded p-[10px] sm:p-[50px]">
          <div className="mb-[25px] logo flex flex-col justify-center items-center w-full">
            <img className="w-[50px] h-[50px]" src={img}></img>
            <h1 className="tracking-[1.2px] text-white font-bold mt-[10px] text-lg">
              Create Account💎
            </h1>
          </div>

          <div className="">
            <form autoComplete="off">
              <div className="mb-[24px] flex">
                <div className="mr-[10px] flex justify-center items-center">
                  <FaUserCircle size="21px" color="#2F3E46" />
                </div>
                <input
                  className="rounded outline-none w-full h-[36px] p-[10px]"
                  placeholder="Username"
                  required
                ></input>
              </div>

              <div className="mb-[24px] flex">
                <div className="mr-[10px] flex justify-center items-center">
                  <AiOutlineMail size="21px" color="#2F3E46" />
                </div>
                <input
                  autoComplete="off"
                  type="email"
                  className="rounded outline-none w-full h-[36px] p-[10px]"
                  placeholder="E-Mail Address"
                  required
                ></input>
              </div>

              <div className="mb-[24px] flex">
                <div className="mr-[10px] flex justify-center items-center">
                  <RiLockPasswordFill size="21px" color="hsl(217,10%,25%)" />
                </div>
                <input
                  autoComplete="off"
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

              <div className="mb-[24px] flex">
                <div className="mr-[10px] flex justify-center items-center">
                  <FiPhoneCall size="21px" color="#2F3E46" />
                </div>
                <input
                  type="tel"
                  className="rounded outline-none w-full h-[36px] p-[10px]"
                  placeholder="Mobile No."
                  required
                ></input>
              </div>
              <div className="mb-[24px] flex items-center justify-center">
                <div className="mr-[10px] flex justify-center items-center">
                  <BsGenderAmbiguous size="21px" color="#2F3E46" />
                </div>
                <select
                  className="rounded h-[36px] mb-[24px] pl-[10px] w-full"
                  name="Gender"
                >
                  <option value="Male">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full p-[5px] bg-back text-white rounded-full hover:bg-zinc-600"
              >
                Register
              </button>
            </form>

            <div className="mt-[30px] flex justify-center items-center">
              <p className="text-[12px] sm:text-[14px] mr-[15px] tracking-[0.6px] text-[14px] text-white">
                Already Have An Account💎
              </p>
              <Link
                to="/"
                className="text-[12px] sm:text-[14px] font-bold ml-[15px] tracking-[1px] text-[14px] text-back hover:text-slate-600"
              >
                Log-In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
