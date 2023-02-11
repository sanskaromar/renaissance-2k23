import React from "react";
import Wheel from "./Wheel.js";



export default function Sponsors(props) {
  const styleSponsorsMargin = {
    width: "100vw",
    maxHeight: "120vw"
  };
  const style2 = {
    position: "relative",
    width: "100%",
    overflow: "hidden"
  }
  return (
    <div style={style2}>
      <div className="h-screen bg-[#84A98C]" style={styleSponsorsMargin}>
        <Wheel Images={props.ImageList} />
      </div>
    </div>
  );
}
