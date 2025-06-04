import { FaRegUserCircle, FaRegClock } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function LibraryCard({
  top = true,
  bottom = true,
  gameId,
  image,
  title,
  tags = [],
  playerCount,
  duration,
  description,
}) {
  return (
    <section className="flex flex-col items-center h-full min-h-screen relative animate-up">
      {top && (
        <img
          src="/LibraryImages/Top.png"
          className="w-full max-w-[1200px] -mb-24 z-0"
          alt="top drip"
        />
      )}

      <div className="w-full font-roboto flex items-start rounded-[30px] p-4 gap-4 bg-grass max-w-[1200px] relative z-10">
        <Link to={`/library/game/${gameId}`} className="flex flex-shrink-0">
          <img
            src={image}
            className="rounded-[30px] object-contain mt-4"
            alt="game"
          />
        </Link>

        <div className="flex flex-col space-y-4">
          <Link
            className="text-[56px] font-semibold text-white hover:underline hover:cursor-pointer line-clamp-1"
            to={`/library/game/${gameId}`}
          >
            {title}
          </Link>
          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-1 text-white">
              <FaRegUserCircle />
              <div>{playerCount}</div>
            </div>
            <div className="flex items-center gap-1 text-white">
              <FaRegClock />
              <div>{duration}</div>
            </div>
          </div>
          <div className="flex gap-1 font-bold text-grass">
            {tags.map((tag, idx) => (
              <Link
                to={`/library?genre=${tag}`}
                key={idx}
                className="bg-beige py-1 px-4 rounded-full hover:px-6 hover:cursor-pointer hover:bg-highlight hover:text-beige transition-all duration-300"
              >
                {tag}
              </Link>
            ))}
          </div>
          <div className="text-white whitespace-pre-line">{description}</div>
        </div>
      </div>

      {bottom && (
        <img
          src="/LibraryImages/Bottom.png"
          className="w-full max-w-[1200px] -mt-10 z-0"
          alt="bottom drip"
        />
      )}
    </section>
  );
}
