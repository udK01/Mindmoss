import { useEffect, useState } from "react";

import Carousel from "./Carousel";

import AnimateLetters from "./AnimateLetters";

export default function ExploreOurGames() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById(`exploreOurGamesPaintDrip`);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section className="bg-grass relative w-full h-full overflow-hidden">
      {/* Background Image */}
      <img
        id="exploreOurGamesPaintDrip"
        src="./PaintDrip.png"
        alt="Paint Drip"
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 ${
          isInView ? "translate-y-0" : "-translate-y-[500px]"
        } transition-all duration-1000 ease-in-out`}
      />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center space-y-40">
        {/* Text */}
        <div className="font-rubikWet text-center text-grass 2xs:text-[40px] sm:text-[70px] md:text-[100px] xl:text-[120px]">
          {isInView && <AnimateLetters text="Explore Our Games" delay={0.1} />}
        </div>

        {/* Carousel */}
        <div className="px-10 sm:px-20 md:px-40 py-20 w-full">
          <Carousel />
        </div>
      </div>
    </section>
  );
}
