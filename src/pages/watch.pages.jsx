import React, { startTransition } from "react";
import StateManagement from "../contextApi/statemanagement.contextApi";
import { useContext } from "react";

const Watch = () => {
  const { watch } = useContext(StateManagement);
  return (
    <div className=" bg-white h-[100vh]">
      <div>
        <video src={watch.video} className="w-screen lg:h-[70vh]"></video>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, debitis.
      </p>
      <p>{watch.name}</p>
    </div>
  );
};

export default Watch;