import React from "react";
import { FiSearch } from "react-icons/fi";

const Input = () => {
  return (
    <div className="w-screen flex items-center h-[20%]">
      <div className="max-w-[20%] mr-3 text-white">
        <FiSearch size="2rem" />
      </div>
      <div className="w-[80%]  ">
        <input
          type="search"
          className="w-[100%]  outline-none border-[0px] bg-white bg-opacity-0 text-4xl"
          placeholder="search"
        />
      </div>
    </div>
  );
};

export default Input
