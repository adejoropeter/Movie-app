import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
const MiniWatch = () => {
  // const { back, watch, setWatch,hidden,watchVid,setWatchVid} = useContext(StateManagement);
  return (
    <>
      {/* {watchVid.map((vid) => {
        return (
          <div
            key={vid.id}
            ref={back}
            className={`w-[20rem] h-60 bg-green-500 fixed bottom-0 right-4 hidden `}
          >
            <iframe controls src={vid.url}></iframe>
            <div
              className="absolute top-0 right-0 text-white"
              onClick={() => setWatchVid([])}
            >
              <FaTimes size="2rem" />
            </div>
          </div>
        );
      })} */}
    </>
  );
};

export const MiniWatch2 = () => {
  // const { queue,setQueue,queueRef,hidden} = useContext(StateManagement);
  const handleDel=()=>{
    // setQueue([])

  }
  return (
    <>
        return (
          {/* <div
          ref={queueRef}
            key={queue.id}
            className={`w-[20rem] h-60 bg-green-500 fixed bottom-0 right-4 hidden `}
          >
            <iframe controls src={queue.url}></iframe>
            <div
              className="absolute top-0 right-0 text-white"
              onClick={ handleDel}
            >
              <FaTimes size="2rem" />
            </div>
          </div> */}
        );
    </>
  );
};
export default MiniWatch;
