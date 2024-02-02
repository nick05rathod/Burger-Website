import React from "react";
import MenuCard from "../layouts/MenuCard";

const Menu = () => {
  const menuData = [
    {
      id: 1,
      title: "Mexican Burger",
      price: "$30",
    },
    {
      id: 2,
      title: "Cheezy Burger",
      price: "$25",
    },
    {
      id: 3,
      title: "AlooTikki Burger",
      price: "$20",
    },
    {
      id: 4,
      title: "veg Burger",
      price: "$15",
    },
    {
      id: 5,
      title: "veg Burger",
      price: "$15",
    },
    {
      id: 6,
      title: "veg Burger",
      price: "$15",
    },
    {
      id: 7,
      title: "veg Burger",
      price: "$15",
    },
    {
      id: 8,
      title: "veg Burger",
      price: "$15",
    },
  ];
  return (
    <div>
      <div className="min-h-screen container flex flex-col justify-center py-5 ">
        {/* menu section */}
        <h1 className="font-semibold text-4xl text-center">Our Menu</h1>

        {/* card section */}
        <div className=" flex flex-wrap pt-5 p-1 gap-8 justify-center ">
          {menuData.map((item) => {
            return (
              <MenuCard key={item.id} title={item.title} price={item.price} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
