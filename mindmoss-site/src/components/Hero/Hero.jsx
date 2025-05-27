import "./Hero.css";

import AnimateLetters from "../AnimateLetters";

export default function Hero() {
  return (
    <section className="h-screen flex justify-center items-center w-full gap-20 2xs:px-[5%] md:px-[15%]">
      {/* Left Container */}
      <div className="flex flex-col 2xs:items-center md:items-start space-y-[60px] z-20">
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
        <div className="font-roboto font-light 2xs:text-[16px] md:text-[22px] lg:text-[24px] whitespace-nowrap">
          <AnimateLetters
            text={`We grow experimental games and digital ideas.\nA small indie studio creating atmospheric experiences.`}
            delay={0.015}
          />
        </div>
        {/* CTA Buttons */}
        <div className="flex items-center 2xs:gap-[10px] md:gap-[20px] lg:gap-[30px] 2xs:text-[20px] md:text-[22px] lg:text-[24px] font-semibold font-poppins">
          <div className="px-4 py-2 bg-grass text-beige hover:px-8 hover:shadow-[inset_0_0_0_4px_#4C6A51] hover:bg-transparent hover:text-grass hover:cursor-pointer transition-all duration-300 opacity-0 animate-up">
            View Our Work
          </div>
          <div
            className="px-4 py-1 ring-4 ring-grass text-grass hover:px-8 hover:bg-grass hover:cursor-pointer hover:text-beige transition-all duration-300 opacity-0 animate-up"
            style={{ animationDelay: "200ms" }}
          >
            Read Our Logs
          </div>
        </div>
      </div>

      {/* Right Container */}
      <div className="2xs:absolute lg:relative md:brightness-75 lg:brightness-100 flex flex-col max-w-[50%] 2xs:space-y-5 md:space-y-8 lg:space-y-10 flex-shrink-0">
        <img
          src="./HeroImage/image1.png"
          className="opacity-0 reveal-left-box"
          style={{ "--speed": "1s", animationDelay: "200ms" }}
        />
        <img
          src="./HeroImage/image2.png"
          className="z-10 scale-110 absolute opacity-0 reveal-right-box"
          style={{ "--speed": "0.8s", animationDelay: "800ms" }}
        />
        <img
          src="./HeroImage/image3.png"
          className="opacity-0 reveal-left-box"
          style={{ "--speed": "1s", animationDelay: "1200ms" }}
        />
      </div>
    </section>
  );
}
