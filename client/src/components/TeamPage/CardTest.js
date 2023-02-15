import React from "react";
import "./CardTest.css";
import Details from "./Details";
const people1 =
  "https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
const CardTest = () => {
  return (
    <>
      <h2 class="design">Design Team</h2>
      <div class="box">
        <Details
          image={people1}
          name="Someone"
          year="2020"
          facebook="https://www.facebook.com/"
          twitter="https://www.twitter.com/"
          linkedin="https://www.linkedin.com/"
          youtube="https://www.youtube.com/"
        />
        <Details
          image={people1}
          name="Someone"
          year="2020"
          facebook="https://www.facebook.com/"
          twitter="https://www.twitter.com/"
          linkedin="https://www.linkedin.com/"
          youtube="https://www.youtube.com/"
        />
      </div>
    </>
  );
};

export default CardTest;
