import React, { useContext } from "react";
import StateManagement from "../contextApi/statemanagement.contextApi";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
// import { ImTwitch } from "react-icons/im";
const Card = ({ dateReleased, title, item }) => {
  const { setBookMarked, bookmarked, setWatch, items, setItems, back } =
    useContext(StateManagement);
  const addToBookMark = (id) => {
    const bulk = items.map((item) => {
      return item.id === id ? { ...item, store: !item.store } : item;
    });
    setItems(bulk);
    if (!item.store) {
      setBookMarked([...bookmarked, item]);
    } else {
      const filter = bookmarked.filter((item) => {
        return item.id !== id;
      });
      setBookMarked(filter);
    }
  };

  let navigate = useNavigate();
  const addToWatch = () => {
    setWatch([item]);
    navigate("/watch");
  };
  return (
    <div className=" w-[100%]">
      <div className="w-[80%] h-fit overflow-hidden relative">
        <iframe
          className="w-screen h-60 sm:w-[15rem] sm:h-40 lg:h-40"
          // width="560"
          // height="315"
          src={item.url}
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div
          className="bg-gray-300 rounded-full w-fit h-fit p-3 absolute top-0 right-0 cursor-pointer sm:top-0 sm:right-0 md:top-0 md:right-0"
          onClick={() => addToBookMark(item.id)}
        >
          {item.store ? (
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
          {title} {item.name}
        </p>
      </div>
    </div>
  );
};

export default Card;
