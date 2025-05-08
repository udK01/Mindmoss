import React from "react";

import Header from "./components/Header";

function App() {
  return (
    <section>
      {/* <Header /> */}
      <img src="./Paper.png" className="absolute -z-10" />
      <div className="relative flex items-center justify-center w-fit px-24 top-[200px] left-[100px]">
        <div className="font-finger text-[64px] text-beige">Mindmoss.</div>
        <img
          src="./BrushStrokes/Title.png"
          className="absolute -z-10 object-cover"
        />
      </div>
    </section>
  );
}

export default App;
