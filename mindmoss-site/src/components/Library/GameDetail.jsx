import { useParams } from "react-router-dom";
import { useLibrary } from "../../context/LibraryProvider";

import LibraryCard from "./LibraryCard";

export default function GameDetail() {
  const { gameId } = useParams();
  const { libraryCardInfo } = useLibrary();

  const game = libraryCardInfo.find((game) => game.gameId === parseInt(gameId));

  console.log(game);

  return (
    <section className="min-h-screen bg-beige py-[10%] flex justify-center">
      <div className="w-[80%] flex justify-center">
        <LibraryCard
          top={false}
          bottom={true}
          image={game.image}
          title={game.title}
          tags={game.tags}
          playerCount={game.playerCount}
          duration={game.duration}
          description={game.description}
        />
      </div>
    </section>
  );
}
