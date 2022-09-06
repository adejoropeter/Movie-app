import React, { startTransition } from "react";
import StateManagement from "../contextApi/statemanagement.contextApi";
import { useContext } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Watch = () => {
  const { watch, back } = useContext(StateManagement);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
    back.current.style.display = "block";
  };
  return (
    <>
      {watch.map((watch) => {
        return (
          <div className=" bg-white h-[100vh]" key={watch.id}>
            <div className="w-[3rem]" onClick={handleClick}>
              <BsArrowLeft size="2rem" />
            </div>
            <div>
              <iframe
                className="w-screen lg:h-[70vh]"
                src={watch.url}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                // controls
                // autoPlay
              ></iframe>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
              debitis.
            </p>
            <p>{watch.name}</p>
          </div>
        );
      })}
    </>
  );
};

export default Watch;
