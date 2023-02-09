import React, { Component, useState } from "react";
import SponsorsCard from "./SponsorsCard";

// import testImage from "./../../../public/ecellLogo.png";

export default class Wheel extends Component{
  constructor( props){
    super( props)

    this.state = {
      radius : 800,
      cards : [],
      theta : 0.0
    }

    this.temp_theta = 0.0;
    this.anim_id = null;
  }

  componentDidMount(){
    let center_of_wheel = {
      x : parseFloat( this.wheel.style.width)/ 2.0,
      y : parseFloat( this.wheel.style.height)/ 2.0
    }

    let newCards = [];

    let numCards = 8;
    let constant = numCards/2;

    const testImage = "";

    for( let i = 0; i < numCards; i++){
      newCards.push(
        <SponsorsCard theta={( Math.PI / parseFloat(constant)) * i} radius={this.state.radius} center={center_of_wheel} key={`card_${i}`} image={testImage}/>
      );
    }
    
    this.setState({ cards: newCards});
  }

  handle_scroll = event =>{
    // this.temp_theta += event.deltaY;
    // this.wheel.style.transform = `translate( -50%, -50%) rotate(${this.temp_theta * 0.05}deg)`;
    // this.setState({ theta : this.temp_theta});

    clearTimeout( this.anim_id);
    const scrollSpeed = (event.deltaY / 360) * 20;
    this.temp_theta += scrollSpeed;

    this.wheel.style.transitionDuration = "0.0s";
    this.wheel.style.transitionDelay = "0.0s";
    this.wheel.style.transform = `translate( -50%, -50%) rotate( ${this.temp_theta}deg)`;

    for( let i = 0; i < this.wheel.children.length; i++){
      this.wheel.children[ i].style.transitionDuration = "0.0s";
      this.wheel.children[ i].style.transitionDelay = "0.0s";
      this.wheel.children[ i].style.transform = `translate( -50%, -50%) rotate( ${-1 * this.temp_theta}deg)`;
      }

    this.anim_id = setTimeout( () => {
      this.setState( {theta : this.temp_theta});
    }, 150);
  }

  render(){
    return(
      <div onWheel={this.handle_scroll} ref={ref_id => this.wheel = ref_id} style={Styles.Wheel}>
        {this.state.cards}
      </div>
    )
  }
}

const Styles = {
  Wheel : {
    position : 'absolute',
    bottom : '900px',
    left : '50%',
    transform : 'translate( -50%, -50%)',
    height : '300px',
    width : '300px',
    overflowLeft : 'hidden'
  }
}