import React from "react";
import img from "../assets/image/deals.jpg";

const Combo = () => {
  return (
    <div>
      <div className="  min-h-screen container  justify-center pt-12 md:pt-0">
        <h1 className="font-bold text-4xl text-center mt-7 ">Combo</h1>
        <div className="flex flex-col md:flex-row gap-10 mt-8">
          <div className="w-full md:w-2/4 text-center md:text-start space-y-4">
            <img src={img} alt="img" className=" relative rounded-lg " />
          </div>
          <div className=" absolute md:m-0 p-0 space-y-3 text-center text-white  m-12 ">
            <h1 className="text-4xl md:text-5xl fond-bold">Exclusive Offer!</h1>
            <h3 className="text-3xl md:text-4xl font-bold">
              Lorem ipsum dolor sit amet.
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
              quasi!
            </p>
            <button
              className=" bg-secondary  *:py-6 px-4 rounded-md
          text-white  font-semibold text-lg
           hover:scale-105 duration-300 "
            >
              Order Now
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 mt-8">
          <div className="w-full md:w-2/4 text-center md:text-start space-y-4">
            <img src={img} alt="img" className=" relative rounded-lg " />
          </div>
          <div className=" absolute md:m-0 p-0 space-y-3 text-center text-white  m-12 ">
            <h1 className="text-4xl md:text-5xl fond-bold">Exclusive Offer!</h1>
            <h3 className="text-3xl md:text-4xl font-bold">
              Lorem ipsum dolor sit amet.
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
              quasi!
            </p>
            <button
              className=" bg-secondary  *:py-6 px-4 rounded-md
          text-white  font-semibold text-lg
           hover:scale-105 duration-300 "
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Combo;
