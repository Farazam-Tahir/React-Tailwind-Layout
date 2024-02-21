// import './App.css';
import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Cardbox from "./Components/Cardbox";
import Heading from "./Components/Heading";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Heading heading = "Section 1"/>
      <Cardbox/>
    </>
  );
}

export default App;
