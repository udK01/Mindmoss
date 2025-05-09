export default function ExploreOurGames() {
  return (
    <section className="bg-grass w-full h-screen">
      <div className="relative flex flex-col items-center">
        {/* Text */}
        <div className="font-rubikWet text-[120px] text-grass text-center z-10">
          Explore Our Games
        </div>

        {/* Image below the text */}
        <img src="./PaintDrip.png" className="absolute" />
      </div>
    </section>
  );
}
