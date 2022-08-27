import React from "react";
import StateManagement from "../contextApi/statemanagement.contextApi";
import { useContext } from "react";
import Card from "../components/card.component";

const Bookmark = () => {
  const { bookmarked } = useContext(StateManagement);
  return (
    <>
      {bookmarked.map((item) => {
        return <Card />;
      })}
    </>
  );
};

export default Bookmark;
