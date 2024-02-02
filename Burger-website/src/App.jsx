import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Combo from "./components/Combo";

function App() {
  return (
    <>
      <div id="home">
        <Navbar></Navbar>
      </div>
      <Hero></Hero>

      <div id="menu">
        <Menu></Menu>
      </div>
      <div id="combo">
        <Combo></Combo>
      </div>
    </>
  );
}

export default App;
