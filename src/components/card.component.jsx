import React, { useContext, useReducer } from "react";
import StateManagement, {
  ItemContext,
} from "../contextApi/statemanagement.contextApi";
import { BsBack, BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import Watch from "../pages/watch.pages";
import { ADD_TO_BOOKMARK } from "./reducer/action";
import { REMOVE_FROM_BOOKMARK } from "./reducer/reducer";
const Card = ({ dateReleased, title, eachItem, add }) => {
  const width = useRef(null);
  const playVideo = useRef(null);
  const [playOnHover, setPlayOnHover] = useState(true);
  // const {
  //   setQueue,
  //   queueRef,
  //   queue,
  //   setWatchVid,
  //   watchVid,
  // } = useContext(StateManagement);
  const { dispatch, state } = ItemContext();
  const addToBookMark = (id) => {
    const bulk = state.item.map((item) => {
      return item.id === id ? { ...item, store: !item.store } : item;
    });
    dispatch({ type: "TOGGLE", payload: bulk });
    if (!eachItem.store) {
      dispatch({ type: "ADD_TO_BOOKMARK", payload: eachItem });
    } else {
      const filter = state.bookmark.filter((item) => {
        return item.id !== id;
      });
      dispatch(({type:'REMOVE_FROM_BOOKMARK', payload: filter }));
    }
  };
  const addToQueue = () => {
    //   if (watch.length) {
    //     back.current.classList.add("hidden");
    //     queueRef.current.classList.add("block");
    //     setQueue(item);
    //   } else {
    //     queueRef.current.classList.remove("hidden");
    //     queueRef.current.classList.add("block");
    //     setQueue(item);
    //   }
  };
  let navigate = useNavigate();
  const addToWatch = () => {
    navigate("/watch");
    dispatch({ type: "ADD_TO_WATCH", payload: eachItem });
  };
  
  const handleMouseOver = (id) => {
    playVideo.current.src = `${eachItem.url}&autoplay=1&mute=1`;
    width.current.className = `${width.current.className} transform hover:scale-125 delay-75 transition-transform ease-in duration-100 hover:ring-2 p-5 sm:w-fit`;
    setPlayOnHover(false);
  };
  const handleMouseOut = (id) => {
    playVideo.current.src = `${eachItem.url}`;
    width.current.className = `sm:w-[18rem] md:w-fit lg:w-fit  cursor-pointer  transform delay-75 transition-transform ease-in duration-100 `;
    setPlayOnHover(true);
  };

  return (
    <div
      className="sm:w-[18rem] md:w-fit lg:w-fit  cursor-pointer "
      ref={width}
      onMouseEnter={()=>handleMouseOver(eachItem.id)}
      onMouseLeave={()=>handleMouseOut(eachItem.id)}
    >
      <div className="w-[100%] h-fit md:w-[100%]">
        <iframe
          ref={playVideo}
          className="w-[100%] h-60 sm:w-[18rem] md:w-[14rem] sm:h-40 lg:h-40 lg:w-[15rem] cursor-pointer   "
          src={eachItem?.url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <div className={`${!playOnHover ? "px-4" : ""}`}>
          <div className="flex w-fit">
            <p ref={add}>{dateReleased} 2013 </p>
            <p>{dateReleased} Movie </p>
            <p>{dateReleased} PG</p>
          </div>
          <p
            className="font-bold text-lg cursor-pointer w-fit"
            onClick={addToWatch}
          >
            {title} {eachItem?.name}
          </p>
        </div>

        <div
          className={`${
            playOnHover
              ? "invisible w-[100%] h-fit mx-4 "
              : "visible text-white w-[100%] h-fit  mr-4 bg-gray-500 text-xs p-2 text-center flex items-center"
          }`}
          onClick={() => addToBookMark(eachItem.id)}
        >
          {eachItem.store ? <> <span ><BsFillBookmarkFill className="text-black mx-4"/></span> <span>REMOVE FROM BOOKMARK</span> </> : <><span><BsBookmark className="text-black mx-4"/></span> ADD TO BOOKMARK</>}
        </div>
        <div
          className={`${
            playOnHover
              ? "invisible"
              : "visible text-white w-[100%] bg-gray-500 p-2 text-xs uppercase h-fit  mr-4 text-center bg-grayn-300 mt-4 "
          }`}
          onClick={addToQueue}
        >
          Add to Queue
        </div>
      </div>
    </div>
  );
};

export default Card;
