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

    const element = document.getElementById(`carousel`);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section className="relative w-full h-full overflow-hidden">
      <div className="absolute w-full h-full bg-grass opacity-[100%]" />

      <div className="absolute w-full h-[300px] xl:h-[600px] bg-beige mask-paint bg-no-repeat bg-cover bg-bottom" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Text */}
        <div className="font-rubikWet text-center text-grass 2xs:text-[40px] md:text-[70px] xl:text-[120px]">
          {isInView && <AnimateLetters text="Explore Our Games" delay={0.1} />}
        </div>

        {/* Carousel */}
        <div
          id="carousel"
          className="px-10 sm:px-20 2xs:py-24 md:py-32 lg:py-48 xl:py-64 w-full"
        >
          <Carousel />
        </div>
      </div>
    </section>
  );
}
