import { Link, useParams } from "react-router-dom";
import { useLibrary } from "../../context/LibraryProvider";

import LibraryCard from "./LibraryCard";

import { FaArrowAltCircleLeft, FaRandom } from "react-icons/fa";

export default function GameDetail() {
  const { gameId } = useParams();
  const { libraryCardInfo } = useLibrary();

  const game = libraryCardInfo.find((game) => game.gameId === parseInt(gameId));
  const randomGame = Math.floor(Math.random() * libraryCardInfo.length) + 1;

  return (
    <section className="min-h-screen bg-beige py-[10%] flex justify-center">
      <div className="w-[80%] flex justify-center gap-4">
        <Link to={"/library"}>
          <FaArrowAltCircleLeft className="size-16 hover:text-grass hover:cursor-pointer transition-all duration-300" />
        </Link>
        <LibraryCard
          top={false}
          bottom={true}
          gameId={game.gameId}
          image={game.image}
          title={game.title}
          tags={game.tags}
          playerCount={game.playerCount}
          duration={game.duration}
          description={game.description}
        />
        <Link to={`/library/game/${randomGame}`}>
          <FaRandom className="size-16 hover:text-grass hover:cursor-pointer transition-all duration-300" />
        </Link>
      </div>
    </section>
  );
}
