import { FaRegUserCircle, FaRegClock } from "react-icons/fa";

export default function Library() {
  return (
    <section className="flex flex-col items-center h-full min-h-screen relative">
      {/* Top drip image */}
      <img
        src="./LibraryImages/Top.png"
        className="w-full max-w-[1200px] -mb-24 z-0"
        alt="top drip"
      />

      {/* Main content card */}
      <div className="w-fit font-roboto flex items-start rounded-[30px] p-4 gap-4 bg-grass max-w-[1200px] relative z-10">
        <img
          src="./GameImages/game1.png"
          className="rounded-[30px] object-contain mt-4"
          alt="game"
        />
        <div className="flex flex-col space-y-4">
          <div className="text-[72px] font-semibold text-white">
            Five Night Tenancy
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-1 text-white">
              <FaRegUserCircle />
              <div>Single Player</div>
            </div>
            <div className="flex items-center gap-1 text-white">
              <FaRegClock />
              <div>45 Minutes</div>
            </div>
          </div>
          <div className="flex gap-1 font-bold text-grass">
            <div className="bg-beige py-1 px-4 rounded-full">Strategy</div>
            <div className="bg-beige py-1 px-4 rounded-full">Puzzle</div>
          </div>
          <div className="text-white">
            Your Grandma's creepy old statue leaves something to be desired, and
            all your belongings keep inexplicibly breaking or turning themselves
            on. Your landlord doesn't believe you and is keen to kick you out -
            keep his patience high by managing hazards throughout your
            apartment. Oh, and don't forget to pickup the post.
            <br />
            <br />
            Five Night Tenancy was created by Tbage and marshs over the course
            of five days for the Brackeys 2025.1 game jam and all of its art and
            music is entirely original. It's a simple game about moving into an
            apartment – what can possibly go wrong?
          </div>
        </div>
      </div>

      {/* Bottom drip image */}
      <img
        src="./LibraryImages/Bottom.png"
        className="w-full max-w-[1200px] -mt-10 z-0"
        alt="bottom drip"
      />
    </section>
  );
}
