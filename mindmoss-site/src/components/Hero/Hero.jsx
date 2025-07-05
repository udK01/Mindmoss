import "./Hero.css";

import { Link } from "react-router-dom";

import AnimateLetters from "../AnimateLetters";

export default function Hero() {
  return (
    <section className="h-screen flex justify-center bg-beige items-center w-full gap-20 2xs:px-[5%] md:px-[15%]">
      <div className="absolute w-full h-full bg-beige opacity-[66%]" />

      {/* Left Container */}
      <div className="flex flex-col 2xs:items-center lg:items-start 2xs:space-y-[360px] md:space-y-[400px] lg:space-y-16 z-20">
        {/* Title */}
        <div className="relative flex items-center justify-center w-fit px-24 -ml-10">
          <div className="font-finger 2xs:text-[32px] md:text-[48px] lg:text-[72px] text-beige">
            <AnimateLetters text="Mindmoss." delay={0.1} />
          </div>
          <div className="absolute -z-10 reveal-left-box">
            <img src="./BrushStrokes/Title.png" className="object-cover" />
          </div>
        </div>
        {/* Hero Text */}
        <div className="font-roboto font-light 2xs:hidden lg:block 2xs:text-[16px] md:text-[22px] lg:text-[24px] whitespace-nowrap">
          <AnimateLetters
            text={`We grow experimental games and digital ideas.\nA small indie studio creating atmospheric experiences.`}
            delay={0.015}
          />
        </div>
        {/* CTA Buttons */}
        <div className="flex items-center 2xs:gap-[10px] md:gap-[20px] lg:gap-[30px] 2xs:text-[20px] md:text-[22px] lg:text-[24px] font-semibold font-poppins">
          <Link
            className="px-4 py-2 bg-grass rounded-md text-beige hover:px-8 hover:shadow-[inset_0_0_0_4px_#4C6A51] hover:bg-transparent hover:text-grass hover:cursor-pointer transition-all duration-300 opacity-0 animate-up"
            to={"/library"}
          >
            View Our Work
          </Link>
          <Link
            className="px-4 py-1 ring-4 rounded-md ring-grass text-grass hover:px-8 hover:bg-grass hover:cursor-pointer hover:text-beige transition-all duration-300 opacity-0 animate-up"
            style={{ animationDelay: "200ms" }}
            to={"/dev-logs"}
          >
            Read Our Logs
          </Link>
        </div>
      </div>

      {/* Right Container */}
      <div className="2xs:absolute lg:relative md:brightness-75 lg:brightness-100 flex flex-col max-w-[50%] 2xs:space-y-24 md:space-y-12 lg:space-y-10 flex-shrink-0">
        <img
          src="./HeroImage/image1.png"
          className="opacity-0 reveal-left-box 2xs:scale-[160%] md:scale-100"
          style={{ "--speed": "1s", animationDelay: "200ms" }}
        />
        <img
          src="./HeroImage/image2.png"
          className="z-10 2xs:scale-[180%] md:scale-110 2xs:-rotate-6 pb-16 md:rotate-0 absolute opacity-0 reveal-right-box"
          style={{ "--speed": "0.8s", animationDelay: "800ms" }}
        />
        <img
          src="./HeroImage/image3.png"
          className="opacity-0 reveal-left-box 2xs:scale-[160%] md:scale-100"
          style={{ "--speed": "1s", animationDelay: "1200ms" }}
        />
      </div>
    </section>
  );
}
