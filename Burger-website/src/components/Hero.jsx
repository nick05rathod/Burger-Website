import React from "react";
import heropng from "../assets/image/hero.png";
const Hero = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className="min-h-screen container flex flex-col justify-center md:flex-row  md:justify-center items-center">
        {/* main section */}
        <div className="w-full md:w-2/4 space-y-8 text-center md:text-start mt-24 md:mt-10">
          <div>
            <h3 className="font-semibold text-4xl md:text-5xl">
              Where is my Burger!
            </h3>
            <h1 className="font-bold text-7xl md:text-5xl text-primary">
              Our Burgers, Your Bliss
            </h1>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
            exercitationem minus quisquam ut nemo reprehenderit repellendus,
            eum, nisi magni voluptatem repudiandae? Praesentium enim,
            accusantium recusandae nostrum iusto asperiores explicabo numquam.
          </p>
          <button className=" rounded-md bg-secondary py-2 px-4 text-white font-semibold hover:scale-105 transition duration-300 ease-in-out ">
            Order Now
          </button>
        </div>
        {/* image section  */}
        <div>
          <img
            src={heropng}
            alt="heroimage"
            className="hover:scale-105 transition duration-300 ease-in-out rounded-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
