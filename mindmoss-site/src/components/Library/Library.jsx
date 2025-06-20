import { useState, useMemo } from "react";

import SearchBar from "./SearchBar";
import LibrarySquare from "./LibrarySquare";
import GenreFilter from "./GenreFilter";

import { useLibrary } from "../../context/LibraryProvider";
import { useFilters } from "./FilterProvider";

export default function Library() {
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
      <div
        className="absolute inset-0 w-full h-full bg-beige bg-paper bg-repeat-y opacity-[66%] z-0"
        style={{ backgroundSize: "100% auto" }}
      />

      <div className="w-full max-w-[80%] flex items-center justify-end 2xs:flex-col md:flex-row pb-[4%]">
        <div className="w-full flex justify-between items-center">
          <GenreFilter />
          <button
            className="px-6 py-2 2xs:mr-0 md:mr-10 rounded-md z-10 bg-grass text-white hover:bg-highlight hover:text-black transition-all duration-300"
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
        </div>
      </div>

      {/* <div className="w-[80%] flex flex-wrap gap-4">
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
      </div> */}
    </section>
  );
}
