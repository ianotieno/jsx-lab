import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

import { name, city, image } from "../data/data"
function App() {
  return (
    <div>
      <NavBar />
     <Home name={name} city={city} />
      <About image={image} />
      <p>name {name}</p>
      <p>city {city}</p>
      <p>{image}</p>
      
    </div>
  );
}

export default App;
