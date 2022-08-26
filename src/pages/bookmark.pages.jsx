

import React from "react";
import StateManagement from "../contextApi/statemanagement.contextApi";
import { useContext } from "react";

const Bookmark = () => {
  const { bookmarked } = useContext(StateManagement);
  return (
    <>
      {bookmarked.map((item) => {
        return (
          <div className="w-screen min-h-[80%]" key={item.id}>
            <div className="w-[100%]">
              <video
                src={item.video
                }
                controls
                autoPlay
                className="w-[100%]"
              ></video>
            </div>
            <div>
              <p>{item.name}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Bookmark;



