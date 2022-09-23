import React from "react";
import { useRef, useId } from "react";
import { ItemContext } from "../contextApi/statemanagement.contextApi";
import Like from "./like.component";
const CommentSection = () => {
  const id = useId();
  const {
    state: { watch, item },
    dispatch,
  } = ItemContext();
  const hidden = useRef(null);
  const value = useRef(null);
  const handleHidden = () => {
    hidden.current.classList.add("flex");
    hidden.current.classList.remove("hidden");
  };
  const addComment = (id) => {
    const sets = watch.comment.map((item) => {
      return item.id === id
        ? {
            ...item,
            comment: [...item.comment, { id: id, name: value.current.value }],
          }
        : {
            ...item,
            comment: [...item.comment, { id: id, name: value.current.value }],
          };
    });

    console.log(watch);
    // dispatch({
    //   type: "ADD_COMMENT",
    //   payload: sets,
    // });
    console.log(sets);
  };
  return (
    <div className="mt-10 w-[100%]">
      <div className="flex">
        <div className="w-10 h-10 ring-2 rounded-full mr-4">
          <img src="" alt="" />
        </div>
        <div className="w-[100%]">
          <form action="" className="w-[100%] ">
            <input
              onFocus={handleHidden}
              type="text"
              ref={value}
              placeholder="Add a comment..."
              className="border-b-2 py-1 border-gray-400 focus:border-red-500 focus:duration-100 focus:delay-300 focus: focus:transition w-[100%] focus:outline-none"
            />
          </form>
          <div
            className="hidden justify-between m-2 items-center "
            ref={hidden}
          >
            <div>emoji</div>
            <div>
              <button
                onClick={() => {
                  value.current.value = "";
                  hidden.current.classList.add("hidden");
                  hidden.current.classList.remove("flex");
                }}
                className=" text-lg text-black  px-5 py-3 w-fit "
              >
                CANCEL
              </button>
              <button
                onClick={() => addComment(watch.id)}
                className="bg-gray-600 text-lg  text-white px-5 py-3 w-fit "
              >
                COMMENT
              </button>
            </div>
          </div>
          <div>
            {/* {item.map((a) => {
              return a.id === watch.id ? (
                <>
                  <div className="flex">
                    <div>
                      {id} {new Date().getMinutes()}
                    </div>
                    <h1>
                      {a.comment.map((com) => {
                        return <h1>{com.name}</h1>;
                      })}
                    </h1>
                  </div>
                  <Like disLikeValue={'REPLY'}></Like>
                </>
              ) : (
                ""
              );
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommentSection;
