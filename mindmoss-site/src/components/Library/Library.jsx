import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdGridView, MdViewList } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

import LibraryCard from "./LibraryCard";
import LibrarySquare from "./LibrarySquare";
import { useLibrary } from "../../context/LibraryProvider";

export default function Library() {
  const [searchValue, setSearchValue] = useState("");
  const [displayGrid, setDisplayGrid] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredGames, setFilteredGames] = useState([]);

  const { libraryCardInfo } = useLibrary();
  const containerRef = useRef(null);

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

  // Close search on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
        setSearchValue("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="bg-beige flex flex-col items-center h-full min-h-screen relative pt-40">
      <div className="w-full flex items-center justify-end px-[20%] pb-[4%]">
        <div ref={containerRef} className="relative flex items-center mr-4">
          {/* Search Icon */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-black hover:text-grass focus:outline-none"
          >
            <IoMdSearch className="size-10" />
          </button>

          {/* Slide-out input */}
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search..."
            className={`transition-all duration-300 bg-transparent border-b-2 focus:outline-none font-roboto font-medium border-grass rounded px-4 py-2 ml-2
              ${
                isOpen
                  ? "w-64 opacity-100"
                  : "w-0 opacity-0 overflow-hidden p-0 border-none"
              }
            `}
          />
        </div>

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
