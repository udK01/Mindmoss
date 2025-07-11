import { useRef, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import { useFilters } from "./FilterProvider";

export default function SearchBar({ isOpen, setIsOpen }) {
  const { filters, handleChange } = useFilters();
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen, handleChange]);

  return (
    <div ref={containerRef} className="relative flex items-center mr-4">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-black hover:text-highlight focus:outline-none"
        aria-label="Toggle Search"
      >
        <IoMdSearch className="size-10" />
      </button>

      <input
        type="text"
        value={filters.name}
        onChange={handleChange("name")}
        placeholder="Search..."
        className={`transition-all duration-300 bg-transparent border-b-2 focus:outline-none font-roboto font-medium border-highlight text-white rounded px-4 py-2 ml-2
          ${
            isOpen
              ? "2xs:w-48 lg:w-64 opacity-100"
              : "w-0 opacity-0 overflow-hidden p-0 border-none"
          }
        `}
      />
    </div>
  );
}
