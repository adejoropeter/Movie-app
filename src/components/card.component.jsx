import React, { useContext, useEffect } from "react";
import StateManagement from "../contextApi/statemanagement.contextApi";
import { BsBookmark, BsFillBookFill, BsFillBookmarkFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Card = ({ src, dateReleased, title, item }) => {
  const { setBookMarked, bookmarked, setWatch, toggle, setToggle } =
    useContext(StateManagement);

  const addToBookMark = () => {
    setToggle(!toggle);
  };

  let navigate = useNavigate();
  const addToWatch = () => {
    setWatch(item);
    navigate("/watch");
  };
  return (
    <div className=" w-[100%]">
      <div className="w-fit overflow-hidden relative">
        <video
          src={src}
          controls
          autoPlay
          className="w-screen h-60 sm:w-[15rem]"
        ></video>
        <div
          className="bg-gray-300 rounded-full w-fit h-fit p-3 absolute top-6 right-8 cursor-pointer"
          onClick={addToBookMark}
        >
          {!toggle ? (
            <BsFillBookmarkFill size="1rem" />
          ) : (
            <BsBookmark size="1rem" />
          )}
        </div>
      </div>
      <div>
        <div className="flex">
          <p>{dateReleased} 2013 </p>
          <p>{dateReleased} Movie </p>
          <p>{dateReleased} PG</p>
        </div>
        <p className="font-bold text-lg" onClick={addToWatch}>
          {title} The Diary Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Cumque, rem?
        </p>
      </div>
    </div>
  );
};

export default Card;
