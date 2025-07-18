import { FaFilter } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

import Log from "./Log";

import { useDevLogs } from "../../context/DevLogProvider";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function DevLogs() {
  const { logs } = useDevLogs();

  const [sortOrder, setSortOrder] = useState("desc");

  const sortedLogs = sortLogsByDate(logs, sortOrder);

  function sortLogsByDate(logs, order = "asc") {
    return [...logs].sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();

      return order === "asc" ? dateA - dateB : dateB - dateA;
    });
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center py-[200px] bg-grass">
      <div className="w-[60%] py-10 flex items-center justify-end z-10">
        <div className="relative inline-block group">
          <div className="flex flex-col items-end">
            <FaFilter className="size-10 hover:cursor-pointer hover:text-highlight transition-all duration-300" />

            <div
              className="absolute top-full mt-0 right-0 bg-grass rounded shadow-lg text-sm w-28 
                    opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto 
                    transition-all duration-200 ring-2 ring-black z-50"
            >
              <button
                onClick={() => setSortOrder("desc")}
                className="block w-full px-4 py-2 hover:bg-highlight hover:text-white text-left rounded-md"
              >
                Newest
              </button>
              <button
                onClick={() => setSortOrder("asc")}
                className="block w-full px-4 py-2 hover:bg-highlight hover:text-white text-left rounded-md"
              >
                Oldest
              </button>
            </div>
          </div>
        </div>

        <Link to={"/add-logs"}>
          <IoIosAddCircle className="size-14 hover:cursor-pointer hover:text-highlight transition-all duration-300" />
        </Link>
      </div>
    </section>
  );
}
