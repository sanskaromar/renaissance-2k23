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
      <div className="p-2 m-16 ">
        <div className="w-full h-full m-2  p-4">
          <img
            className="rounded-2xl"
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1676009270~exp=1676009870~hmac=3cb6c26d342f93aae3b9dd7794ce149fc4bead798315867402f19c972ac4dcce"
            alt="profile"
          />
        </div>
        <div className=" p-1">
          <div className="flex justify-center text-center">
            <h1 className=" font-bold text-3xl">Mark A. Parker</h1>
          </div>
          <div>
            <p className="flex justify-center p-2 text-gray-200">
              Web Developer
            </p>
          </div>
          <div className="flex justify-center">
            <div className=" m-2  hover:cursor-pointer">
              <a href="https://twitter.com/" target="_blank">
                <AiFillTwitterCircle size="50px" />
              </a>
            </div>
            <div className=" m-2 hover:cursor-pointer">
              <a href="https://www.linkedin.com/" target="_blank">
                <AiFillLinkedin size="50px" />
              </a>
            </div>
            <div className=" m-2 hover:cursor-pointer">
              <a href="https://www.instagram.com/" target="_blank">
                <AiFillInstagram size="50px" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
