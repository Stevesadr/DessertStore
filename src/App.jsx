import { useState } from "react";
import MainBody from "./components/MainBody";
import ShopingCard from "./components/ShopingCard";

function App() {
  return (
    <div className="bg-constom-100 w-screen text-constom-900 h-fit flex flex-col lg:flex-row">
      <div className="w-full h-auto lg:w-2/3 lg:h-full">
        <MainBody />
      </div>
      <div className="w-full h-auto lg:w-1/3 lg:h-full lg:mt-14 flex items-center justify-startd">
        <ShopingCard />
      </div>
    </div>
  );
}

export default App;
