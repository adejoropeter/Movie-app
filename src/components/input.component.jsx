import React, { useContext } from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Input = () => {
  // const [search,setSearch]=useState('')
  // const { search, setSearch,items,setItems} = useContext(StateManagement);
  return (
    <div >
      <div className="w-[30rem] flex items-center h-[20%] mb-5 bg-gray-300 my-0 mx-auto">
        <div className="max-w-[20%] mr-3 text-white mt-2">
          <FiSearch size="2rem" />
        </div>
        <div className="w-[100%]  ">
          <input
            // onChange={(e)=>setSearch(e.target.value)}
            // value={search}
            type="search"
            className="w-[100%]  outline-none border-[0px] bg-white bg-opacity-0 text-4xl"
            placeholder="search"
          />
        </div>
      </div>
    </div>
  );
};
export default Input;
