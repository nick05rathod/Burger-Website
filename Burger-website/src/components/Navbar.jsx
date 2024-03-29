import React from "react";
import { Link } from "react-scroll";
import Darkmode from "../layouts/Darkmode";

const Navbar = () => {
  return (
    <header className=" fixed w-full z-10 py-4 bg-tertiary shadow-xl dark:bg-slate-900 dark:text-white">
      <div className="container flex flex-row justify-between items-center">
        <div>
          <Link to="/" spy={true} smooth={true} duration={600}>
            <h1 className="font-semibold text-secondary text-2xl">
              Burger Bistro
            </h1>
          </Link>
        </div>

        <nav
          className=" hidden lg:flex gap-10 text-secondary font-semibold text-lg
          "
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={600}
            className="cursor-pointer hover:text-primary hover:border-b-4 border-solid border-primary transition duration-300 ease-in-out "
          >
            Home
          </Link>

          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={600}
            className="cursor-pointer hover:text-primary hover:border-b-4 border-solid border-primary transition duration-300 ease-in-out "
          >
            Menu
          </Link>
          <Link
            to="combo"
            spy={true}
            smooth={true}
            duration={600}
            className="cursor-pointer hover:text-primary hover:border-b-4 border-solid border-primary transition duration-300 ease-in-out "
          >
            Combo
          </Link>
          <Link
            to="special"
            spy={true}
            smooth={true}
            duration={600}
            className="cursor-pointer hover:text-primary hover:border-b-4 border-solid border-primary transition duration-300 ease-in-out "
          >
            Special
          </Link>
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={600}
            className="cursor-pointer hover:text-primary hover:border-b-4 border-solid border-primary transition duration-300 ease-in-out "
          >
            Review
          </Link>
        </nav>
        <div className="flex gap-5 item-center">
          <div>
            <Darkmode></Darkmode>
          </div>
          <button
            className=" bg-secondary  *:py-6 px-4 rounded-md
          text-white  font-semibold text-lg
           hover:scale-105 duration-300 "
          >
            Order Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
