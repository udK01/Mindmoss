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
      { threshold: 0.1 }
    );

    const element = document.getElementById(`exploreOurGamesPaintDrip`);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section className="relative w-full h-full overflow-hidden">
      <div className="absolute w-full h-full bg-grass bg-paper opacity-[100%]" />

      {/* Background Image */}
      <img
        id="exploreOurGamesPaintDrip"
        src="/PaintDrip.png"
        alt="Paint Drip"
        className="absolute top-0 left-0 w-full 2xs:h-[30%] md:h-[50%] lg:h-[40%] xl:h-[50%]"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Text */}
        <div className="font-rubikWet text-center text-grass 2xs:text-[40px] md:text-[70px] xl:text-[120px]">
          {isInView && <AnimateLetters text="Explore Our Games" delay={0.1} />}
        </div>

        {/* Carousel */}
        <div className="px-10 sm:px-20 md:px-40 2xs:py-24 lg:py-64 w-full">
          <Carousel />
        </div>
      </div>
    </section>
  );
}
