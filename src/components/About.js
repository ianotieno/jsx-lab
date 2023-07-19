import React from "react";


function About({ image }) {
  // update the JSX being returned!
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>"never easy"</p>
  <img src={image} alt= "I made this"/>
  </div>
  );
}

export default About;
