import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdGridView, MdViewList } from "react-icons/md";

import SearchBar from "./SearchBar"; // import it
import LibraryCard from "./LibraryCard";
import LibrarySquare from "./LibrarySquare";
import { useLibrary } from "../../context/LibraryProvider";

export default function Library() {
  const [searchValue, setSearchValue] = useState("");
  const [displayGrid, setDisplayGrid] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredGames, setFilteredGames] = useState([]);

  const { libraryCardInfo } = useLibrary();

  // Filter games based on search value
  useEffect(() => {
    const search = searchValue.toLowerCase().trim();
    if (search === "") {
      setFilteredGames(libraryCardInfo);
    } else {
      setFilteredGames(
        libraryCardInfo.filter((game) =>
          game.title.toLowerCase().includes(search)
        )
      );
    }
  }, [searchValue, libraryCardInfo]);

  return (
    <section className="bg-beige flex flex-col items-center h-full min-h-screen relative pt-40">
      <div className="w-full max-w-[80%] flex items-center justify-end pb-[4%]">
        <div className="flex">
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />

          {/* Toggle Views */}
          <MdViewList
            title="List View"
            className={`size-10 ${
              !displayGrid ? "text-grass" : ""
            } hover:text-grass hover:cursor-pointer transition-all duration-300`}
            onClick={() => setDisplayGrid(false)}
          />
          <MdGridView
            title="Grid View"
            className={`size-10 ${
              displayGrid ? "text-grass" : ""
            } hover:text-grass hover:cursor-pointer transition-all duration-300`}
            onClick={() => setDisplayGrid(true)}
          />
        </div>
      </div>

      {/* Display Cards */}
      <AnimatePresence mode="wait">
        {displayGrid ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filteredGames.map((game, index) => (
              <LibrarySquare
                key={index}
                index={index}
                gameId={game.gameId}
                title={game.title}
                image={game.image}
                tags={game.tags}
                playerCount={game.playerCount}
                duration={game.duration}
                description={game.description}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredGames.map((game, index) => (
              <LibraryCard
                key={index}
                top={index !== 0}
                bottom={index !== filteredGames.length - 1}
                image={game.image}
                title={game.title}
                tags={game.tags}
                playerCount={game.playerCount}
                duration={game.duration}
                description={game.description}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
