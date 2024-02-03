import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Combo from "./components/Combo";
import SpecialMenu from "./components/SpecialMenu";
import Review from "./components/Review";
import Footer from "./components/Footer";

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
      <div id="special">
        <SpecialMenu></SpecialMenu>
      </div>
      <div id="review">
        <Review></Review>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
