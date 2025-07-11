import { FaRegUserCircle, FaRegClock, FaSteam, FaItchIo } from "react-icons/fa";
import { IoMdCreate } from "react-icons/io";
import { Link } from "react-router-dom";

export default function LibraryCard({
  bottom = true,
  gameId,
  image,
  steam,
  itch,
  title,
  tags = [],
  creator,
  playerCount,
  duration,
  description,
}) {
  return (
    <section className="flex flex-col items-center w-full min-h-screen relative animate-up px-4">
      <div className="w-full max-w-[1200px] font-roboto flex flex-col md:flex-row items-start rounded-[30px] p-4 md:p-6 gap-6 bg-highlight relative z-10">
        <Link
          to={`/library/game/${gameId}`}
          className="flex-shrink-0 w-full md:w-[40%]"
        >
          <img
            src={image}
            className="rounded-[30px] object-contain w-full h-auto max-h-[400px] mx-auto"
            alt="game"
          />
        </Link>

        <div className="flex flex-col space-y-4 w-full md:w-[60%]">
          <Link
            to={`/library/game/${gameId}`}
            className="2xs:text-[26px] sm:text-[40px] lg:text-[56px] font-semibold text-white hover:underline hover:cursor-pointer line-clamp-2"
          >
            {title}
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-2 pr-2">
            <div className="flex flex-wrap gap-4 text-white text-sm md:text-base">
              <div className="flex items-center gap-1" title="Player Count">
                <FaRegUserCircle />
                <span>{playerCount}</span>
              </div>
              <div
                className="flex items-center gap-1"
                title="Estimated Duration"
              >
                <FaRegClock />
                <span>{duration}</span>
              </div>
              <div
                className="flex items-center gap-1 flex-wrap"
                title="Creators"
              >
                <IoMdCreate />
                <span className="truncate">{creator.join(", ")}</span>
              </div>
            </div>

            <div className="flex gap-3 items-center text-white">
              {steam && (
                <a
                  href={steam}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-dark_gray transition-colors duration-300"
                >
                  <FaSteam className="size-5 md:size-6" title="Steam" />
                </a>
              )}
              {itch && (
                <a
                  href={itch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-dark_gray transition-colors duration-300"
                >
                  <FaItchIo className="size-5 md:size-6" title="Itch.io" />
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 font-bold text-grass">
            {tags.map((tag, idx) => (
              <Link
                to={`/library?genre=${tag}`}
                key={idx}
                className="bg-grass text-highlight py-1 px-4 rounded-full hover:px-6 hover:cursor-pointer hover:bg-black hover:text-white transition-all duration-300 text-sm md:text-base"
              >
                {tag}
              </Link>
            ))}
          </div>

          <div className="text-white whitespace-pre-line text-sm md:text-base">
            {description}
          </div>
        </div>
      </div>

      {bottom && (
        <img
          src="/LibraryImages/Drip.png"
          className="w-full max-w-[1200px] 2xs:-mt-6 md:-mt-10 z-0"
          alt="bottom drip"
        />
      )}
    </section>
  );
}
