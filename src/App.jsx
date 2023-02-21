import React from 'react'

const App = () => {
  return (
    <div className="w-full h-screen font-bodyFont text-textColor bg-black relative">
      <div className="w-full h-full absolute top-0 left-0 z-10">
        <div className="w-96 h-96 absolute top-0 -left-10 spin-slow">
          <div className="w-32 h-32 rounded-full bg-designColor absolute top-0 blur-xl"></div>

          <div className="w-24 h-24 rounded-full bg-green-600 absolute -bottom-10 left-16 blur-xl"></div>

          <div className="w-28 h-28 rounded-full bg-designColor absolute top-32 -right-10 blur-xl"></div>
        </div>
      </div>
    </div>
  );
}

export default App