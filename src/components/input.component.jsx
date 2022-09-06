import React, { useContext } from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import StateManagement from "../contextApi/statemanagement.contextApi";

const Input = () => {
  // const [search,setSearch]=useState('')
  const { search, setSearch,items,setItems} = useContext(StateManagement);
  return (
    <div className="w-screen flex items-center h-[20%] mb-5">
      <div className="max-w-[20%] mr-3 text-white mt-2">
        <FiSearch size="2rem" />
      </div>
      <div className="w-[80%]  ">  
        <input
          onChange={(e)=>setSearch(e.target.value)}   
          value={search}
          type="search"
          className="w-[100%]  outline-none border-[0px] bg-white bg-opacity-0 text-4xl"
          placeholder="search"
        />
      </div>
    </div>
  );
};
export default Input;
