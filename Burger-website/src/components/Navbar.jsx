import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className=" fixed w-full z-10 py-4 bg-tertiary shadow-xl">
      <div className="container flex flex-row justify-between items-center">
        <div>
          <Link to="/" spy={true} smooth={true} duration={500}>
            <h1 className="font-semibold text-secondary text-2xl">
              Burger Bistro
            </h1>
          </Link>
        </div>

        <nav className="flex gap-10 text-secondary font-semibold text-lg">
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-primary transition duration-300 ease-in-out"
          >
            Menu
          </Link>
          <Link
            to="hotdeals"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-primary transition duration-300 ease-in-out"
          >
            HotDeals
          </Link>
          <Link
            to="special"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-primary transition duration-300 ease-in-out"
          >
            Special
          </Link>
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-primary transition duration-300 ease-in-out"
          >
            Review
          </Link>
        </nav>
        <div>
          <button
            className=" bg-secondary  *:py-6 px-4 rounded-full
          text-white  font-semibold text-lg
           hover:scale-105 duration-300"
          >
            Order Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
