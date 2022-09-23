import React, { useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar.component";
import Bookmark from "./pages/bookmark.pages";
import Home from "./pages/home.pages";
import Watch from "./pages/watch.pages";
import MiniWatch, { MiniWatch2 } from "./components/miniWatch.component";
import { item } from "./items";
function App() {
  const back = useRef(null);
  const queueRef = useRef(null);
  const [miniWatch, setMiniWatch] = useState([]);
  const [search, setSearch] = useState("");
  const [hidden, setHidden] = useState(true);
  const [queue, setQueue] = useState([]);
  const [watchVid, setWatchVid] = useState([]);
  // const resultArray = items.filter((item) => {
  //   return item.name.toLowerCase().includes(search.toLowerCase());
  // });

  return (
    <div className=" bg-none w-[100vw] min-h-[100vh] flex flex-col  overflow-hidden ">
      {/* <StateManagement.Provider
        value={{
          items,
          hidden,
          setHidden,
          bookmarked,
          setBookMarked,
          setItems,
          watch,
          setWatch,
          miniWatch,
          setMiniWatch,
          back,
          search,
          setSearch,
          queue,
          setQueue,
          queueRef,
          resultArray,
          watchVid,
          setWatchVid,
          handleDecrease,
          handleIncrease,
          state,
          dispatch,
          watchArr
        }}
      > */}
      <BrowserRouter>
        <Navbar />  
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="bookmark" element={<Bookmark />}></Route>
          <Route path="watch" element={<Watch />}></Route>
        </Routes>
        <MiniWatch />
        <MiniWatch2 />
      </BrowserRouter>
      {/* </StateManagement.Provider> */}
    </div>
  );
}
export default App;
