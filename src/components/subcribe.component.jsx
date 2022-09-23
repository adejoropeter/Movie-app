import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { ItemContext } from "../contextApi/statemanagement.contextApi";
const Subscribe = () => {
  const {
    state: { watch },
    dispatch,
    sub,
    bell,
    hidden,
    unsub,
    bg,
  } = ItemContext();
  const handleSUb = () => {
    bell.current.classList.remove("hidden");
    sub.current.classList.add("hidden");
    unsub.current.classList.remove("hidden");
    dispatch({ type: "SUBSCRIBE" });
  };
  const handleUnsub = () => {
    hidden.current.classList.remove("hidden");
    bg.current.classList.remove("bg-white");
    bg.current.classList.add("bg-gray-300");
  };
  return (
    <>
      <div className="flex items-center">
        <div>
          <button
            ref={sub}
            onClick={handleSUb}
            className="bg-red-800 text-lg  text-white px-5 py-3 w-fit "
          >
            SUBSCRIBE
          </button>

          <button
            ref={unsub}
            onClick={handleUnsub}
            className="bg-gray-800 text-lg  text-white px-5 py-3 w-fit hidden"
          >
            UNSUBSCRIBE
          </button>
        </div>
        <div className="hidden" ref={bell}>
          <AiOutlineBell size={"2rem"} />
        </div>
      </div>
      <div
        className="bg-gray-600 absolute w-52 h-40 top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] hidden"
        ref={hidden}
      >
        <p>Are you sure you wanna unsubscribe from {watch.name}</p>
        <div>
          <button onClick={() => hidden.current.classList.add("hidden")}>
            Cancel
          </button>
          <button
            onClick={() => {
              bell.current.classList.add("hidden");
              sub.current.classList.remove("hidden");
              unsub.current.classList.add("hidden");
              hidden.current.classList.add("hidden");
              dispatch({ type: "UNSUBSCRIBE" });
            }}
          >
            Unsubscribe
          </button>
        </div>
      </div>
    </>
  );
};
export default Subscribe;
