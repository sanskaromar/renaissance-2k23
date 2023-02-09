import React from "react";
import Wheel from "./Wheel.js";



export default function Sponsors() {
  const styleSponsorsMargin = {
    backgroundImage:
      "radial-gradient(120% 70% at 50% -30px, #2F3E46 75%, transparent 75%)",
    width: '100vw'
  };
  const style2 = {
    width: '800px',
    overflow: "scroll"
  }
  return (
    <div style={style2}>
      <div className="h-screen bg-[#84A98C]" style={styleSponsorsMargin}>
        <Wheel/>
      </div>
    </div>
  );
}
