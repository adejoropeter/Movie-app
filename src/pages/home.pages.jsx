import React from "react";
import { useContext } from "react";
import StateManagement from "../contextApi/statemanagement.contextApi";
import Card from "../components/card.component";
import Input from "../components/input.component";
const Home = () => {
  const { items, setWatch } = useContext(StateManagement);
  return (
    <div className="min-h-[80vh] w-[100%] mt-20 p-4">
      <Input />
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3">
        {items.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
