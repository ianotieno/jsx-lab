import React from "react";


function Home({ name, city }) {
  // update the JSX being returned!
  return( 
  <div id="home">
    <h1>
    <h1 style={{ color: "firebrick" }}>{name} is a Web Developer from {city}</h1>
      
      </h1>
    
    </div>);
}

export default Home;
