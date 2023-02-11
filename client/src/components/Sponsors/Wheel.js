import React, { Component, useState } from "react";
import SponsorsCard from "./SponsorsCard";
import "./Sponsors.css";

// import testImage from "./../../../public/ecellLogo.png";

export default class Wheel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radius: 1800,
      cards: [],
      theta: 0.0,
    };

    this.imageList = props.Images;
    this.temp_theta = 0.0;
    this.anim_id = null;
  }

  componentDidMount() {
    let center_of_wheel = {
      x: parseFloat(this.wheel.style.width) / 2.0,
      y: parseFloat(this.wheel.style.height) / 2.0,
    };

    console.log("x : ", center_of_wheel.x);
    console.log("y : ", center_of_wheel.y);

    let newCards = [];

    //
    //      This variable is to modified when changint the number of sponsors
    //
    let numCards = 32;
    let constant = numCards / 2;

    for (let i = 0; i < numCards; i++) {
      newCards.push(
        <SponsorsCard
          theta={(Math.PI / parseFloat(constant)) * i}
          radius={this.state.radius}
          center={center_of_wheel}
          key={`card_${i}`}
          image={this.imageList[i]}
        />
      );
    }

    this.setState({ cards: newCards });
  }
  render() {
    return (
      <>
        <div
          ref={(ref_id) => (this.wheel = ref_id)}
          style={Styles.Wheel}
          className="SponsorsWheel"
        >
          {this.state.cards}
        </div>
        <div style={Styles.heading}>
          <h3 style={Styles.text.smallhead}>OUR SPONSORSHIPS</h3>
          <h1 style={Styles.text.largehead}>OFFICIAL SPONSORS</h1>
        </div>
      </>
    );
  }
}

const Styles = {
  Wheel: {
    position: "absolute",
    top: "65%",
    left: "50%",
    transform: "translate( -50%, -100%)",
    height: "3600px",
    width: "3600px",
    borderRadius: "50%",
    backgroundColor: "#2F3E46",
    overflowLeft: "hidden",
  },
  heading: {
    position: "absolute",
    top: "50%",
    paddingBottom: "15vh",
    left: "50%",
    transform: "translate( -50%, -100%)",
    textAlign: "center",
  },
  text: {
    smallhead: {
      color: "white",
      fontSize: "2vw",
      fontWeight: "bold",
    },
    largehead: {
      color: "white",
      fontSize: "5vw",
      fontWeight: "bold",
    },
  },
};
