import React from "react";
import { ItemContext } from "../contextApi/statemanagement.contextApi";
import Card from "../components/card.component";
import Input from "../components/input.component";
import { ADD } from "../components/reducer/action";
import { toContainElement } from "@testing-library/jest-dom/dist/matchers";
const Home = () => {
  const { state, dispatch } = ItemContext();
  return (
    <div className="min-h-[80vh] w-[100%] mt-20 p-4 bg-white">
      <Input /> 
      <div className=" grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2">
        {state.item.map((item) => {
          return <Card key={item.id} eachItem={item} />;
        })} 
      </div>
     
    </div>
  );
};

export default Home;
