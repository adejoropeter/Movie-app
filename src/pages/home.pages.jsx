import React from "react";
import { useContext } from "react";
import StateManagement from "../contextApi/statemanagement.contextApi";
import Card from "../components/card.component";
import Input from "../components/input.component";
const Home = () => {
  const { items,setWatch } = useContext(StateManagement);
  return (
    <div className="min-h-[95vh] w-screen mt-5 p-4">
      <Input />
      {items.map((item) => {
        return <Card  key={item.id} item={item}/>;
      })}
    </div>
  );
};

export default Home;



