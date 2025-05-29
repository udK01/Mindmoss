// SearchBar.jsx
import { useRef, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";

export default function SearchBar({
  searchValue,
  setSearchValue,
  isOpen,
  setIsOpen,
}) {
  const containerRef = useRef(null);

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
  }, [setIsOpen, setSearchValue]);

  return (
    <div ref={containerRef} className="relative flex items-center mr-4">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-black hover:text-grass focus:outline-none"
      >
        <IoMdSearch className="size-10" />
      </button>

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
  );
}
