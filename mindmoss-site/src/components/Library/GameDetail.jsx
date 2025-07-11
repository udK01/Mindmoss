import { Link, useParams } from "react-router-dom";
import { useLibrary } from "../../context/LibraryProvider";

import LibraryCard from "./LibraryCard";

import { FaArrowAltCircleLeft, FaRandom } from "react-icons/fa";
import { useState } from "react";

export default function GameDetail() {
  const { gameId } = useParams();
  const { libraryCardInfo } = useLibrary();

  const game = libraryCardInfo.find((game) => game.gameId === parseInt(gameId));

  const [prev, setPrev] = useState(null);
  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * libraryCardInfo.length) + 1
  );

  function getRandom() {
    if (libraryCardInfo.length <= 1) {
      return 0;
    }
    let random;
    do {
      random = Math.floor(Math.random() * libraryCardInfo.length) + 1;
    } while (random === prev);
    return random;
  }

  const handleRandomClick = () => {
    const newRandom = getRandom();
    setPrev(newRandom);
    setRandomIndex(newRandom);
  };

  return (
    <section className="relative min-h-screen bg-grass py-[10%] flex justify-center">
      <div className="w-[80%] flex flex-col justify-center gap-4">
        <div className="w-full flex justify-between px-24 items-center">
          <Link to={"/library"}>
            <FaArrowAltCircleLeft className="size-16 hover:text-white hover:cursor-pointer transition-all duration-300" />
          </Link>
          <Link
            to={`/library/game/${randomIndex}`}
            onClick={() => handleRandomClick()}
          >
            <FaRandom className="size-16 hover:text-white hover:cursor-pointer transition-all duration-300" />
          </Link>
        </div>

        <LibraryCard
          top={false}
          bottom={true}
          gameId={game.gameId}
          image={game.image}
          steam={game.steam}
          itch={game.itch}
          title={game.title}
          tags={game.tags}
          creator={game.creator}
          playerCount={game.playerCount}
          duration={game.duration}
          description={game.description}
        />
      </div>
    </section>
  );
}
