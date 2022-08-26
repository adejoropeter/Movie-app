import React, { useContext, useEffect } from "react";
import StateManagement from "../contextApi/statemanagement.contextApi";
import { BsBookmark } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Card = ({ src, dateReleased, title ,item}) => {
    const { setBookMarked, bookmarked ,setWatch} = useContext(StateManagement);
  const addItems = (prevItem, nextItem) => {
    if (prevItem.id === nextItem.id) {
    //   return null;
    console.log('YEs')
    } else {
    //   return [...prevItem, nextItem];
    console.log('No')
    }
  };
//   setBookMarked(addItems(bookmarked, item));
const addToBookMark=()=>{
  // console.log('hi')
}

let navigate = useNavigate()
const addToWatch=()=>{
  console.log('watch')
  setWatch(item)
  navigate('/watch')
}
  return (
    <div className="w-[100%] min-h-[80%] mt-4 flex flex-wrap flex-col " onClick={addToWatch} >
      <div className="w-[100%] overflow-hidden rounded-xl relative md:w-[50%]">
        <video
         src={src}
          controls
          autoPlay
          className="w-[100%] h-[16rem] "
        ></video>
        <div className="bg-gray-300 rounded-full w-fit h-fit p-3 absolute top-6 right-8" onClick={addToBookMark}>
          {/* //  return setBookMarked([...bookmarked,item])  */}
          <BsBookmark size="1rem" />
        </div>
      </div>
      <div>
        <div className="flex">
          <p>{dateReleased} 2013 </p>
          <p>{dateReleased} Movie </p>
          <p>{dateReleased} PG</p>
        </div>
        <p className="font-bold text-lg" onClick={addToWatch} >{title} The Diary</p>
      </div>
    </div>
  );
};

export default Card;
