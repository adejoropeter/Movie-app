import React from "react";
import { useContext } from "react";
import StateManagement from "../contextApi/statemanagement.contextApi";
import Card from "../components/card.component";
import Input from "../components/input.component";
const Home = () => {
  const { bookmarked, resultArray, items } = useContext(StateManagement);
  return (
    <div className="min-h-[80vh] w-[100%] mt-20 p-4">
      {bookmarked.map((item) => {
        return (
          <h1 className="text-white" key={item.id}>
            {bookmarked.name}
          </h1>
        );
      })}
      <Input />
      <div className=" grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3">
        {items.map((item) => {
          return <Card key={item.id} item={item} />;
          // console.log(item)
        })}
      </div>
    </div>
  );
};

export default Home;
