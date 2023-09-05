import React, { useState, useEffect } from "react";

const Cards = ({ category, isSelected }) => {
  return (
    <div
      className={` shadow-xl w-16 h-6 md:w-60 md:h-40  text-center  m-3 rounded-md hover:border border-black capitalize text-white text-lg  
      cursor-pointer false md:p-3 ${isSelected ? "bg-slate-400" : "bg-white"}`}
    >
      <h2 className=" text-blue-900 font-bold capitalize text-sm md:text-2xl md:pt-6">
        {category}
      </h2>
      <p className="capitalize text-purple-800 text-sm lg:block md:block hidden">
        Unlimited Jokes on Animal
      </p>
    </div>
  );
};

export default Cards;
