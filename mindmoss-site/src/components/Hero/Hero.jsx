import "./Hero.css";

export default function Hero() {
  return (
    <section className="h-screen flex justify-center items-center w-full gap-20 2xs:px-[5%] md:px-[15%]">
      {/* Left Container */}
      <div className="flex flex-col 2xs:items-center md:items-start space-y-[60px] z-20">
        {/* Title */}
        <div className="relative flex items-center justify-center w-fit px-24 -ml-10">
          <div className="font-finger 2xs:text-[32px] md:text-[48px] lg:text-[72px] text-beige">
            Mindmoss.
          </div>
          <img
            src="./BrushStrokes/Title.png"
            className="absolute -z-10 object-cover"
          />
        </div>
        {/* Hero Text */}
        <div className="font-roboto font-light 2xs:text-[16px] md:text-[22px] lg:text-[24px] whitespace-nowrap">
          <span>We grow experimental games and digital ideas.</span>
          <br />
          <span className="ml-2">
            A small indie studio creating atmospheric experiences.
          </span>
        </div>
        {/* CTA Buttons */}
        <div className="flex items-center 2xs:gap-[10px] md:gap-[20px] lg:gap-[30px] 2xs:text-[20px] md:text-[22px] lg:text-[24px] font-semibold font-poppins">
          <div className="px-4 py-2 bg-grass text-beige hover:cursor-pointer transition-all duration-300">
            View Our Work
          </div>
          <div className="px-4 py-1 ring-4 ring-grass text-grass hover:bg-grass hover:cursor-pointer hover:text-beige transition-all duration-300">
            Read Our Logs
          </div>
        </div>
      </div>

      {/* Right Container */}
      <div className="2xs:absolute lg:relative md:brightness-75 lg:brightness-100 flex flex-col max-w-[50%] 2xs:space-y-5 md:space-y-8 lg:space-y-10 flex-shrink-0">
        <img src="./HeroImage/image1.png" className="" />
        <img src="./HeroImage/image2.png" className="z-10 scale-110 absolute" />
        <img src="./HeroImage/image3.png" className="" />
      </div>
    </section>
  );
}
