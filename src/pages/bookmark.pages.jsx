import React, { useReducer } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { ItemContext } from "../contextApi/statemanagement.contextApi";

const Bookmark = () => {
  const {
    state: { bookmark, item },
    dispatch,
  } = ItemContext();
  const handleDelete = (id) => {
    const del = bookmark.filter((item) => item.id !== id);
    dispatch({ type: "REMOVE_FROM_BOOKMARK", payload: del });
    const set = item.map((item) => {
      return item.id === id ? { ...item, store: false } : item;
    });
    const sets = item.map((item) => {
      return item.id === id ? { ...item, comment: [] } : item;
    });
    dispatch({ type: "TOGGLE", payload: set });
    console.log(item);
  };
  return (
    <>
      {bookmark.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3">
          {bookmark.map((item) => {
            return (
              <div className=" w-[10rem] relative h-fit md:w-[100%]" key={item.id}>
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  src={item.url}
                  className="w-[100%] h-60 sm:w-[18rem] md:w-[14rem] sm:h-40 lg:h-40 lg:w-[15rem] cursor-pointer"
                ></iframe>
                <div
                  className="bg-gray-500 rounded-full w-fit h-fit p-3 absolute top-2 right-16 cursor-pointer"
                  onClick={() => handleDelete(item.id)}
                >
                  {!item.store ? (
                    <div>
                      {" "}
                      <BsFillBookmarkFill
                        size="1rem"
                        className="text-green-400"
                      />{" "}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="h-[100vh] w-screen flex justify-center items-center text-center text-white bg-red-500 p-4">
          <h1 className="text-xl">
            {" "}
            Nothing in bookmark try to bookmark and come back :){" "}
          </h1>
        </div>
      )}
    </>
  );
};

export default Bookmark;
