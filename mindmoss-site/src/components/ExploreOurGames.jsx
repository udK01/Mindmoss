import Carousel from "./Carousel";

export default function ExploreOurGames() {
  return (
    <section className="bg-grass relative w-full h-full overflow-hidden">
      {/* Background Image */}
      <img
        src="./PaintDrip.png"
        alt="Paint Drip"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center space-y-40">
        {/* Text */}
        <div className="font-rubikWet text-center text-grass 2xs:text-[40px] sm:text-[70px] md:text-[100px] xl:text-[120px]">
          Explore Our Games
        </div>

        {/* Carousel */}
        <div className="px-10 sm:px-20 md:px-40 py-20 w-full">
          <Carousel />
        </div>
      </div>
    </section>
  );
}
