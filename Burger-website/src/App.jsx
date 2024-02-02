import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>

      <div id="menu">
        <Menu></Menu>
      </div>
    </>
  );
}

export default App;
