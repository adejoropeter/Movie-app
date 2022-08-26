import React, { useState } from "react";
import { Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";
import Bookmark from "./pages/bookmark.pages";
import StateManagement from "./contextApi/statemanagement.contextApi";
import Card from "./components/card.component";
import Home from "./pages/home.pages";
function App() {
  const [bookmarked, setBookMarked] = useState([]);
  const [watch, setWatch] = useState([]);
  // console.log(bookmarked)
  const [items, setItems] = useState([
    { name: "Adejoro Peter", id: 1, video: "sam" },
    { name: "Samson Ade", id: 2, video: "s" },
    { name: "Adejoro Moyin", id: 3, video: "sj" },
  ]);
console.log(watch)

  return (
    <div className="bg-[#1F2021] w-[100vw] min-h-[100vh] flex flex-col overflow-hidden ">
      <StateManagement.Provider
        value={{ items, bookmarked, setBookMarked ,watch,setWatch}}
      >
            <Navbar />     
        <Routes>
                    <Route path="/" element={<Home />}></Route>         {" "}
          <Route path="bookmark" element={<Bookmark />}></Route>       {" "}
        </Routes> 
      </StateManagement.Provider>
    </div>
  );
}
export default App;