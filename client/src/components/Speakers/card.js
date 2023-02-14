import React from "react";
import { icons } from "react-icons";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterCircle
} from "react-icons/ai";
const Card = () => {
  return (
    <>
      <div className="flex  justify-center items-center p-10 m-6">
        <div className="w-[225px]">
          <div className="flex  justify-center items-center">
            <img
              className="  mb-0"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRLRMXynnc7D6-xfdpeaoEUeon2FaU0XtPg&usqp=CAU"
              alt="profile"
            />
          </div>
          <div className="flex flex-col bg-white  justify-center items-center">
            <h1 className="text-neutral-700 font-bold text-3xl ">
              Mark A. Parker
            </h1>

            <p className="text-neutral-700 flex justify-center p-2 text-gray-200">
              Web Developer
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
