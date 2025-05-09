import Carousel from "./Carousel";

export default function ExploreOurGames() {
  return (
    <section className="bg-grass w-full h-full space-y-80 overflow-hidden">
      <div className="relative flex flex-col items-center z-10">
        {/* Text */}
        <div className="font-rubikWet text-[120px] text-grass text-center z-10">
          Explore Our Games
        </div>

        {/* Image below the text */}
        <img src="./PaintDrip.png" className="absolute" />
      </div>

      <div className="py-40 px-40">
        <Carousel />
      </div>
    </section>
  );
}
