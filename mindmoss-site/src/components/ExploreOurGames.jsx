import Carousel from "./Carousel";

export default function ExploreOurGames() {
  return (
    <section className="bg-grass w-full h-full space-y-80 overflow-hidden">
      <div className="relative flex flex-col items-center z-10">
        {/* Text */}
        <div className="font-rubikWet 2xs:text-[40px] sm:text-[70px] md:text-[100px] xl:text-[120px] text-grass text-center z-10">
          Explore Our Games
        </div>

        {/* Image below the text */}
        {/* Image */}
        <div className="absolute w-full h-[300px] bg-gray-500" />
      </div>

      <div className="py-40 px-40">
        <Carousel />
      </div>
    </section>
  );
}
