import React from "react";
import RoundFive from "./components/roundDesigns/RoundFive";
import RoundFour from "./components/roundDesigns/RoundFour";
import RoundOne from "./components/roundDesigns/RoundOne";
import RoundThree from "./components/roundDesigns/RoundThree";
import RoundTwo from "./components/roundDesigns/RoundTwo";
import Home from "./Home";

const App = () => {
  return (
    <div className="w-full h-screen font-bodyFont text-textColor bg-black relative overflow-hidden">
      <div className="max-w-screen-2xl h-full mx-auto flex justify-center items-center">
        <Home />
      </div>
      <div className="w-full h-full absolute top-0 left-0 z-10">
        <RoundOne />
        <RoundTwo />
        <RoundThree />
        <RoundFour />
        <RoundFive />
      </div>
    </div>
  );
};

export default App;
