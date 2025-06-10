import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdGridView, MdViewList } from "react-icons/md";

import SearchBar from "./SearchBar";
import LibraryCard from "./LibraryCard";
import LibrarySquare from "./LibrarySquare";
import GenreFilter from "./GenreFilter";

import { useLibrary } from "../../context/LibraryProvider";
import { useFilters } from "./FilterProvider";

export default function Library() {
  // const [displayGrid, setDisplayGrid] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const { filters, handleResetFilters } = useFilters();
  const { libraryCardInfo } = useLibrary();

  const filteredList = useMemo(() => {
    return libraryCardInfo.filter((game) => {
      const matchesName =
        filters.name === "" ||
        game.title.toLowerCase().includes(filters.name.toLowerCase());

      const matchesTags =
        filters.genres.length === 0 ||
        filters.genres.every((genre) => game.tags.includes(genre));

      return matchesName && matchesTags;
    });
  }, [filters, libraryCardInfo]);

  return (
    <section className="bg-beige flex flex-col items-center h-full min-h-screen relative py-40">
      <div className="w-full max-w-[80%] flex items-center justify-end 2xs:flex-col md:flex-row pb-[4%]">
        <div className="w-full flex justify-between items-center">
          <GenreFilter />
          <button
            className="px-6 py-2 2xs:mr-0 md:mr-10 rounded-md bg-grass text-white hover:bg-highlight hover:text-black transition-all duration-300"
            onClick={handleResetFilters}
          >
            Reset
          </button>
        </div>
        <div className="2xs:w-full md:w-fit flex 2xs:justify-between md:justify-end">
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          {/* <div className="flex gap-1">
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
          </div> */}
        </div>
      </div>

      <div className="w-[80%] flex flex-wrap gap-4">
        {filteredList.map((game, index) => (
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
      </div>
    </section>
  );
}

{
  /* Display Cards */
}
// <AnimatePresence mode="wait">
//   {displayGrid ? (
//     <motion.div
//       key="grid"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.3 }}
//       className="w-[80%] flex flex-wrap gap-4"
//     >
//       {filteredList.map((game, index) => (
//         <LibrarySquare
//           key={index}
//           index={index}
//           gameId={game.gameId}
//           title={game.title}
//           image={game.image}
//           tags={game.tags}
//           playerCount={game.playerCount}
//           duration={game.duration}
//           description={game.description}
//         />
//       ))}
//     </motion.div>
//   ) : (
//     <motion.div
//       key="list"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.3 }}
//     >
//       {filteredList.map((game, index) => (
//         <LibraryCard
//           key={index}
//           top={index !== 0}
//           bottom={index !== filteredList.length - 1 || index === 0}
//           gameId={game.gameId}
//           image={game.image}
//           title={game.title}
//           tags={game.tags}
//           playerCount={game.playerCount}
//           duration={game.duration}
//           description={game.description}
//         />
//       ))}
//     </motion.div>
//   )}
// </AnimatePresence>
