import React, { useEffect, useRef } from "react";

import { FaChevronDown } from "react-icons/fa";

import { useFilters } from "./FilterProvider";

const genresList = [
  "Strategy",
  "Puzzle",
  "Roguelike",
  "Rhythm",
  "Survival",
  "Card Game",
  "Time Management",
  "Tower Defense",
];

const GenreFilter = () => {
  const { dropdownVisible, setDropdownVisible, filters, handleGenreChange } =
    useFilters();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-fit z-10" ref={dropdownRef}>
      <div
        onClick={() => setDropdownVisible(!dropdownVisible)}
        className={`flex items-center gap-6 bg-grass text-white px-4 py-2 ${
          dropdownVisible ? "rounded-t-md" : "rounded-md"
        } hover:cursor-pointer transition-all duration-300 hover:bg-highlight hover:text-black`}
      >
        Genres
        {filters.genres.length > 0 && (
          <div>{filters.genres.length} Selected</div>
        )}
        <FaChevronDown className="text-[11px]" />
      </div>
      {dropdownVisible && (
        <div className="absolute z-10 w-[80%] mt-2 left-1/2 transform -translate-x-1/2 bg-grass text-white p-2 rounded-b-md shadow-lg">
          <div className="w-full flex flex-wrap gap-4 items-center">
            {genresList.map((genre) => (
              <label
                key={genre}
                className="flex items-center hover:text-dark_gray hover:cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters.genres.includes(genre)}
                  onChange={() => handleGenreChange(genre)}
                  className="sr-only"
                />
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center mr-2 ${
                    filters.genres.includes(genre) ? "bg-dark_gray" : "bg-white"
                  }`}
                >
                  {filters.genres.includes(genre) && (
                    <span className="w-2 h-2 rounded-full"></span>
                  )}
                </span>
                {genre}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GenreFilter;
