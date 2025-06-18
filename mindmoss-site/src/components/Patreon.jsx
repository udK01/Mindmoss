import { useEffect, useState } from "react";

import AnimateLetters from "./AnimateLetters";

export default function Patreon() {
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

    const element = document.getElementById(`patreonButton`);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section className="relative pb-20 w-full h-full min-h-screen">
      {/* Background layer */}
      <div className="absolute w-full h-full bg-beige bg-paper opacity-100 z-0" />

      {/* Decorative tile image */}
      <img
        src="/PatreonImages/Tiles.png"
        className="absolute w-full h-full object-cover z-10"
      />

      {/* Drip image */}
      <div className="relative w-full h-[600px] bg-paper bg-grass z-20 mask-paint" />

      <div className="absolute inset-0 w-full h-full flex justify-center">
        <div className="absolute font-rubikWet text-center text-beige 2xs:text-[40px] md:text-[70px] xl:text-[120px] z-30">
          {isInView && <AnimateLetters text="Find Us On Patreon" delay={0.1} />}
        </div>
      </div>

      {/* Card container */}

      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="px-8 py-6 flex flex-col lg:flex-row items-center md:pt-0 lg:pt-40 gap-40 md:max-w-[60%] lg:max-w-[90%]">
          <a
            href="https://www.patreon.com/c/Mindmoss"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full h-full ${isInView && "animate-up"} opacity-0`}
          >
            <img
              src="/PatreonImages/PatreonCard.png"
              className="2xs:absolute lg:relative w-[350px] max-w-full h-auto pt-20 object-contain hover:-translate-y-6 transition-all duration-500"
              alt="Patreon Card"
            />
          </a>

          <div className="font-pressStart text-white flex flex-col gap-4 z-20">
            <div
              className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-l-[30px] rounded-tr-[30px] shadow-md p-6 ${
                isInView && "animate-up"
              } opacity-0`}
              style={{ animationDelay: "0.4s" }}
            >
              <h2 className="lg:text-[54px] xl:text-[72px] font-bold">
                Patreon
              </h2>
              <p className="lg:text-[16px] xl:text-[24px]">
                Like what we do?
                <br />
                Help us keep doing it.
              </p>
            </div>

            <div
              className={`w-full flex justify-end ${
                isInView && "animate-up"
              } opacity-0`}
              style={{ animationDelay: "0.75s" }}
            >
              <a
                id="patreonButton"
                href="https://www.patreon.com/c/Mindmoss"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-grass px-6 py-2 rounded-md hover:px-10 transition-all duration-300">
                  Support Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
