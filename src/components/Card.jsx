import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Card = ({ isOpen, category, onClose, joke, fetchJokeForCategory }) => {
  return (
    <div
      className={`modal ${
        isOpen
          ? "absolute shadow-2xl md:top-56  top-72 lg:rounded-md card p-5 lg:w-1/2 md:w-1/2 "
          : "hidden"
      }`}
    >
      <AiOutlineClose
        className="h-6 w-6 float-right text-white cursor-pointer"
        onClick={() => onClose()}
      />
      <>
        <h2 className="text-center text-3xl text-white font-bold capitalize">
          {category}
        </h2>
        <div className="w-full border border-black m-auto mt-6 shadow-xl flex flex-col items-center justify-center">
          <p className="text-center font-semibold text-blue-100   font-sans  m-5 text-xl md:text-3xl">
            {joke}
          </p>
          <button
            className="px-4 py-2 bg-blue-700  my-2 mx-3 cursor-pointer lg:w-96 md:96  rounded-md hover:bg-blue-600 font-bold"
            onClick={() => fetchJokeForCategory(category)}
          >
            Next joke
          </button>
        </div>
      </>
    </div>
  );
};

export default Card;
