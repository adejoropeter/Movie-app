import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import StateManagement from "../contextApi/statemanagement.contextApi";
const MiniWatch = () => {
  const { back, watch, setWatch } = useContext(StateManagement);
  return (
    <>
      {watch.map((vid) => {
        return (
          <div
            key={vid.id}
            ref={back}
            className="w-[20rem] h-60 bg-green-500 fixed bottom-0 right-4 hidden"
          >
            <video controls src={vid.video}></video>
            <div
              className="absolute top-0 right-0 text-white"
              onClick={() => setWatch([])}
            >
              <FaTimes size="2rem" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MiniWatch;
