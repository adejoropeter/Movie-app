import React from "react";
import StateManagement from "../contextApi/statemanagement.contextApi";
import { useContext } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";

const Bookmark = () => {
  const { bookmarked, items, setBookMarked, setItems } =
    useContext(StateManagement);
  const handleDelete = (id) => {
    const del = bookmarked.filter((item) => item.id !== id);
    setBookMarked(del);
    const set = items.map((item) => {
      return item.id === id
        ? { ...item, store: false }
        : item;
    });
    setItems(set);
  };
  return (
    <div>
    {bookmarked.length ? (
      <div>
      {bookmarked.map((item) => {
        return (
              <div className=" w-[100%]">
              <div className="w-fit overflow-hidden relative">
                <video
                  src={item.video}
                  controls
                  autoPlay
                  className="w-screen h-60 sm:w-[15rem]"
                ></video>
                <div
                  className="bg-gray-300 rounded-full w-fit h-fit p-3 absolute top-6 right-8 cursor-pointer"
                  onClick={() => handleDelete(item.id)}
                >
                  {!item.store ? <BsFillBookmarkFill size="1rem" /> : ""}
                </div>
              </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="h-[100vh] w-screen flex justify-center items-center text-center text-white bg-red-500 p-4">
          <h1 className="text-xl"> Nothing in bookmark try to bookmark and come back :) </h1>
        </div>
      )}
    </div>
  );
};

export default Bookmark;
