import React, { useContext } from "react";
import StateManagement, {
  ItemContext,
} from "../contextApi/statemanagement.contextApi";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import { RiContrastDropLine } from "react-icons/ri";
const Like = ({disLikeValue}) => {
  const { state, dispatch } = ItemContext();
  const {
    watch: { id, isLike, isDislike, like },
    watch,
  } = state;
  const handleIncrease = (isLike) => {
    if (isDislike) {
      dispatch({ type: "TRUE" });
    }
    else if (isLike) {
      dispatch({ type: "DECREMENT" });
    } else {
      dispatch({ type: "INCREMENT" });
    }
  };
  const handleDecrease = (isDislike) => {
    dispatch({ type: "FALSE" });
    if (isLike) {
      dispatch({ type: "DECREMENT" });
      console.log("REPLY SENT");
    } else {
      console.log("REPLY SENT");
    }
  };
  return (
    <>
      {/* {watch.map((state) => {        
        return ( */}
      <div className="flex" key={id}>
        <div className="pr-4 flex items-center">
          {isLike ? (
            <AiFillLike
              size={"2rem"}
              className="text-4"
              onClick={() => handleIncrease(isLike)}
            />
          ) : (
            <AiOutlineLike
              size={"2rem"}
              className="text-4"
              onClick={() => handleIncrease(isLike)}
            />
          )}

          {like}
        </div>
        <div className="pr-4 flex items-center">
          {isDislike ? (
            <AiFillDislike
              size={"2rem"}
              className="text-4 "
              onClick={() => handleDecrease(isDislike)}
            />
          ) : (
            <AiOutlineDislike
              size={"2rem"}
              className="text-4 "
              onClick={() => handleDecrease(isDislike)}
            />
          )}
          {disLikeValue}
        </div>
      </div>
      {/* );
      })} */}
    </>
  );
};

export default Like;
