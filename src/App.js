import React, { useState } from "react";
import { Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";
import Bookmark from "./pages/bookmark.pages";
import StateManagement from "./contextApi/statemanagement.contextApi";
import Card from "./components/card.component";
import Home from "./pages/home.pages";
import Watch from "./pages/watch.pages";
function App() {
  const [bookmarked, setBookMarked] = useState([]);
  const [watch, setWatch] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [items, setItems] = useState([
    { name: "Adejoro Peter", id: 1, video: "sam", bookmarked: false },
    { name: "Adejoro Moyin", id: 2, video: "sam", bookmarked: false },
    { name: "Samson Ade", id: 3, video: "s", bookmarked: false },
  ]);

  return (
    <div className="bg-[#1F2021] w-[100vw] min-h-[100vh] flex flex-col  overflow-hidden">
      <StateManagement.Provider
        value={{
          items,
          bookmarked,
          setBookMarked,
          watch,
          setWatch,
          toggle,
          setToggle,
        }}
      >
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="bookmark" element={<Bookmark />}></Route>
          <Route path="watch" element={<Watch />}></Route>
        </Routes>
      </StateManagement.Provider>
    </div>
  );
}
export default App;
