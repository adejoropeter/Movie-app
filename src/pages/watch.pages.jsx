

import React from "react";
import StateManagement from "../contextApi/statemanagement.contextApi";
import { useContext } from "react";

const Watch = () => {
  const { watch } = useContext(StateManagement);
console.log(watch)
  return (
        <div className="mt-[10rem] ">
            {
                watch.map(watch=>{
                    return (
                        <h1 className="text-red-500" key={watch.id}>{watch.name}</h1>
                    )
                })
            }
        </div>
  );
};

export default Bookmark;



