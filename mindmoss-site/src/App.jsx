import React from "react";

import Header from "./components/Header";

function App() {
  return (
    <section>
      {/* <Header /> */}
      {/* ... */}
      {/* Background */}
      <img src="./Paper.png" className="absolute -z-10" />
      <div className="flex justify-between items-center w-full gap-20 px-[15%] pt-[10%]">
        {/* Left Container */}
        <div className="flex flex-col space-y-[60px] max-w-[50%]">
          {/* Title */}
          <div className="relative flex items-center justify-center w-fit px-24 -ml-10">
            <div className="font-finger text-[72px] text-beige">Mindmoss.</div>
            <img
              src="./BrushStrokes/Title.png"
              className="absolute -z-10 object-cover"
            />
          </div>
          {/* Hero Text */}
          <div className="font-roboto font-light text-[24px]">
            <div>We grow experimental games and digital ideas.</div>
            <div className="ml-2">
              A small indie studio creating atmospheric experiences.
            </div>
          </div>
          {/* CTA Buttons */}
          <div className="flex items-center gap-[30px] text-[24px] font-semibold font-poppins">
            <div className="px-4 py-2 bg-grass text-beige">View Our Work</div>
            <div className="px-4 py-1 ring-4 ring-grass text-grass">
              Read Our Logs
            </div>
          </div>
        </div>

        {/* Right Container */}
        <div className="flex flex-col -space-y-36">
          <img src="./HeroImage/image1.png" className="w-[700px] h-[219px]" />
          <img
            src="./HeroImage/image2.png"
            className="w-[807px] h-[407px] -rotate-6"
          />
          <img
            src="./HeroImage/image3.png"
            className="w-[677px] h-[252px] z-10"
          />
        </div>
      </div>
    </section>
  );
}

export default App;
