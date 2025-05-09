import "./Hero.css";

export default function Hero() {
  return (
    <section className="h-screen flex items-center w-full gap-20 px-[15%]">
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
        <div className="font-roboto font-light text-[24px] whitespace-nowrap">
          <span>We grow experimental games and digital ideas.</span>
          <br />
          <span className="ml-2">
            A small indie studio creating atmospheric experiences.
          </span>
        </div>
        {/* CTA Buttons */}
        <div className="flex items-center gap-[30px] text-[24px] font-semibold font-poppins">
          <div className="px-4 py-2 bg-grass text-beige hover:cursor-pointer transition-all duration-300">
            View Our Work
          </div>
          <div className="px-4 py-1 ring-4 ring-grass text-grass hover:bg-grass hover:cursor-pointer hover:text-beige transition-all duration-300">
            Read Our Logs
          </div>
        </div>
      </div>

      {/* Right Container */}
      <div className="flex flex-col -space-y-40 max-w-[50%]">
        <img src="./HeroImage/image1.png" />
        <img src="./HeroImage/image2.png" className="z-10 scale-110" />
        <img src="./HeroImage/image3.png" />
      </div>
    </section>
  );
}
