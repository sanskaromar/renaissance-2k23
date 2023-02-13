import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import "./CardTest.css";
const Details = (prop) => {
  return (
    <>
      <div className="all">
        <div class="card">
          <div class="imgBx">
            <img src={prop.image} alt="images" />
          </div>
          <div class="details">
            <h2>
              {prop.name}
              <br />
              <span>{prop.year}</span>
            </h2>
          </div>
        </div>
        <div className="info">
          <div className="color"></div>
          <div className="links">
            <a href={prop.facebook} target="__blank">
              <AiFillFacebook className="space" />
            </a>
            <a href={prop.twitter} target="__blank">
              <AiFillTwitterCircle className="space" />
            </a>
            <a href={prop.linkedin} target="__blank">
              <AiFillLinkedin className="space" />
            </a>
            <a href={prop.youtube} target="__blank">
              <AiFillYoutube className="space" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
