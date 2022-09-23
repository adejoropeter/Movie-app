import React,{useContext} from "react";
import { NavLink } from "react-router-dom";
import { BsFillBookmarkFill } from "react-icons/bs";
import { RiHome2Fill } from "react-icons/ri";
import { ImFilm } from "react-icons/im";
import { BiRadio, BiBarChartSquare } from "react-icons/bi";
import Bookmark from "../pages/bookmark.pages";
import { ItemContext } from "../contextApi/statemanagement.contextApi";
const Navbar = () => {
  const {state:{bookmark}}=ItemContext()
  return (
    <div className="bg-[#10141D] h-16 w-[100vw] rounded-md flex justify-between sticky z-50 top-0 items-center  ">
      <div className="text-white ">
        <ImFilm size="2.5rem" className="text-red-500" />
      </div>
      <div className="flex">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? "text-white p-4 " : "text-gray-500 p-4";
          }}
        >
          <RiHome2Fill size="1.5rem"/>
        </NavLink>
        <NavLink
          to="wi"
          className={({ isActive }) => {
            return isActive ? "text-white p-4" : "text-gray-500 p-4";
          }}
        >
          <BiBarChartSquare size="1.5rem" />
        </NavLink>
        <NavLink
          to="rad"
          className={({ isActive }) => {
            return isActive ? "text-white p-4" : "text-gray-500 p-4";
          }}
        >
          <BiRadio size="1.5rem" />
        </NavLink>
        <NavLink
          to="bookmark"
          className={({ isActive }) => {
            return isActive ? "text-white p-4 relative" : "text-gray-500 p-4 relative";
          }}
        >
          <div >
            <span className="text-red-500 absolute top-0 right-0 text-xl">{bookmark.length}</span>
          <BsFillBookmarkFill size="1.5rem" />

          </div>
        </NavLink>
      </div>
      <div className=" border-2 border-white h-8 w-8 rounded-full overflow-hidden">
        <img src={""} className="w-8 h-8 rounded-full " />
      </div>
    </div>
  );
};

export default Navbar;
