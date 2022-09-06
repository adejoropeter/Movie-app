import React, { useEffect, useRef, useState, useId } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";
import Bookmark from "./pages/bookmark.pages";
import StateManagement from "./contextApi/statemanagement.contextApi";
import Home from "./pages/home.pages";
import Watch from "./pages/watch.pages";
import MiniWatch from "./components/miniWatch.component";
import axios from "axios";
import { RiContactsBookLine } from "react-icons/ri";
function App() {
  const [bookmarked, setBookMarked] = useState([]);
  const back = useRef(null);
  const [watch, setWatch] = useState([]);
  const [miniWatch, setMiniWatch] = useState([]);
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([
    {
      name: "wizkidayo",
      url: "https://www.youtube.com/embed/EiG0BNjTYE0",
      id: useId(),
    },
    {
      name: "Big Wiz",
      url: "https://www.youtube.com/embed/mtEm1wci6qQ",
      id: useId(),
    },
    {
      name: "Machala",
      url: "https://www.youtube.com/embed/EiG0BNjTYE0",
      id: useId(),
    },
    {
      name: "Lil Prince",
      url: "https://www.youtube.com/embed/mtEm1wci6qQ",
      id: useId(),
    },
  ]);
  // const [resultArray, setAr] = useState([]);

  const resultArray = items.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
    // console.log('')
  });
  return (
    <div className="bg-[#1F2021] w-[100vw] min-h-[100vh] flex flex-col  overflow-hidden">
      <StateManagement.Provider
        value={{
          items,
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
          resultArray,
        }}
      >
        <Navbar />
        {/* <div onClick={() => {}}>Hello</div> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="bookmark" element={<Bookmark />}></Route>
          <Route path="watch" element={<Watch />}></Route>
        </Routes>
        <MiniWatch />
      </StateManagement.Provider>
    </div>
  );
}
export default App;
