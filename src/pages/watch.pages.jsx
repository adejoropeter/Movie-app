import React, { useReducer, useRef } from "react";
import StateManagement, {
  ItemContext,
} from "../contextApi/statemanagement.contextApi";
import { useContext } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AiOutlineBell } from "react-icons/ai";
import Like from "../components/like.component";
import { useState } from "react";
import CommentSection from "../components/commentSection.component";
import Subscribe from "../components/subcribe.component";
const Watch = () => {
  const {
    state: { watch },
  } = ItemContext();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
    // if (queueRef.length) {
    //   back.current.classList.add("block");
    //   back.current.classList.remove("hidden");
    //   setWatchVid(watch);
    // } else {
    //   back.current.classList.add("block");
    //   back.current.classList.remove("hidden");
    //   setWatchVid(watch);
    // }
  };
  return (
    <>
      {/* {watch.map((watch) => {
     return ( */}
      <div
        className=" bg-white relative min-h-[100vh] w-[60rem] pr-8 pl-4"
        key={watch.id}
        // ref={bg}
      >
        <div className="w-[3rem]" onClick={handleClick}>
          <BsArrowLeft size="2rem" />
        </div>
        <div>
          <iframe
            className="w-[100%] h-[70vh]"
            src={`${watch.url
              // .substring(0, 59)
            }&autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture controls"
            allowFullScreen
            controls
            // autoPlay
          ></iframe>
        </div>
        <p className="font-bold text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
          debitis.
        </p>

        <div className="flex justify-between items-center ">
          <div className="flex items-center">
            <div className="w-10 h-10 ring-2 rounded-full mr-4">
              <img src="" alt="" />
            </div>
            <div className="flex flex-col">
              <p>{watch.name}</p>
              {/* {state.subscriber}
               */}
              {watch.subscriber}subscriber
            </div>
          </div>
          <Subscribe></Subscribe>
          <Like />
        </div>
        <CommentSection></CommentSection>
      </div>
      {/* );
   }
   )} */}
    </>
  );
};

export default Watch;
