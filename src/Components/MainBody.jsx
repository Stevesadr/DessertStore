import React from "react";
import data from "../../data.json";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";

const MainBody = () => {
  const dataWithID = data.map((item) => ({ ...item, id: uuidv4() }));
  return (
    <div className="w-full h-full lg:px-16 ">
      <h1 className="font-RedHatText-Bold text-[30px] px-4 lg:h-[5%] lg:mt-10 lg:mb-2">
        Desserts
      </h1>
      <div className="w-screen md:w-full   h-[95%] grid grid-cols-1 grid-rows-1 lg:grid-cols-3 lg:grid-rows-3">
        {dataWithID.map((item, i) => {
          return <Card key={i} items={item} />;
        })}
      </div>
    </div>
  );
};

export default MainBody;
