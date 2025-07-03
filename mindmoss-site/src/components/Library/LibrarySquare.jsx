import { FaRegUserCircle, FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function LibrarySquare({
  index,
  gameId,
  title,
  image,
  tags = [],
  playerCount,
  duration,
  description,
}) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      className="relative w-full h-full md:max-w-[299px] lg:max-w-[360px] bg-grass rounded-lg hover:cursor-pointer text-beige opacity-0 animate-up"
      style={{ animationDelay: `${(index % 5) * 0.2}s` }}
    >
      <div
        className="relative w-full h-[420px] overflow-hidden rounded-lg group"
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
      >
        {/* Image */}
        <img
          src={image}
          className={`w-full h-full rounded-lg object-cover ${
            showInfo && "blur-md"
          } transition-all duration-300`}
        />

        <div className="absolute inset-0 bg-gray-800 bg-opacity-60 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col space-y-4 p-4 text-white">
          {/* Game Info */}
          <Link
            to={`/library/game/${gameId}`}
            className="w-full text-center text-[28px] font-fredoka hover:underline"
          >
            {title}
          </Link>
          <div className="w-full h-fit flex justify-between gap-2 items-center">
            <div className="flex items-center gap-1">
              <FaRegUserCircle />
              <div>{playerCount}</div>
            </div>
            <div className="flex items-center gap-1">
              <FaRegClock />
              <div>{duration}</div>
            </div>
          </div>
          {/* Tags */}
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
          <div className="text-white whitespace-pre-line 2xs:line-clamp-5 md:line-clamp-6">
            {description}
          </div>
        </div>

        {/* View Detail box */}
        <Link
          to={`/library/game/${gameId}`}
          className="absolute left-1/2 -translate-x-1/2 bottom-[-3rem] group-hover:bottom-4 transition-all duration-300 bg-grass text-beige px-4 py-2 rounded shadow-lg font-medium hover:px-8 hover:text-grass hover:bg-beige"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
