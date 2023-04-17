import React from "react";
import Left from "./components/home/Left";

const Home = () => {
  return (
    <div className="w-[85%] h-[85%] bg-transparent text-white z-50 flex items-start justify-between">
      <div className="w-16 h-96 bg-transparent">
        <div className="w-full h-20 bg-bodyColor rounded-3xl flex justify-center items-center cursor-pointer group">
          <div className="flex flex-col gap-1.5 overflow-hidden">
            <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor"></span>
            <span className="w-8 h-[2px] bg-textColor inline-block duration-300 group-hover:bg-designColor"></span>
            <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-3.5 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor"></span>
          </div>
        </div>
      </div>
      <div className="w-[94%] h-full bg-transparent flex items-center">
        {/* left part start */}
        <Left />
        {/* right part start */}
        <div className="w-8/12 h-[95%] bg-bodyColor"></div>
      </div>
    </div>
  );
};

export default Home;
