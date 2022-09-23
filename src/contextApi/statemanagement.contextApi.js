import React, { createContext, useContext, useReducer,useRef,useState } from "react";
import reducer, { INITIAL_STATE } from "../components/reducer/reducer";
const StateMang = createContext();
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
   const sub = useRef(null);
  const bell = useRef(null);
  const hidden = useRef(null);
  const unsub = useRef(null);
  const bg = useRef(null);
   const add = useRef(null);
  const showBookMark = useRef(null);
  const [playOnHover, setPlayOnHover] = useState(true);
  return (
    <StateMang.Provider
      value={{ state, dispatch ,sub,bell,hidden,unsub,bg,add
        // width,showBookMark,playOnHover,setPlayOnHover
      }}
    >
      {children}
    </StateMang.Provider>
  );
};
export default Context;
export const ItemContext = () => {
  return useContext(StateMang);
};
