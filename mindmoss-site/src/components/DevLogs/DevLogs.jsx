import { FaFilter } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

import Log from "./Log";
import LogBlockDisplay from "./LogBlockDisplay";

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
  // Why am I bothering with this anymore?

  // I am just submitting at this point for the sake of keeping the streak...

  // Losing my mind.

  // Wasting my life away with this, ey...?
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center py-[200px] bg-grass">
      <div className="2xs:w-[80%] lg:w-[60%] xl:w-[40%] py-10 flex flex-col items-center justify-end z-10 space-y-10">
        <div className="w-full flex justify-between items-center">
          <div className="relative inline-block group">
            <select
              className="px-6 py-1 bg-dark_gray text-white rounded-md hover:bg-highlight hover:text-black focus:outline-none"
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="desc">Newest</option>
              <option value="asc">Latest</option>
            </select>
          </div>

          <Link to={"/add-logs"}>
            <IoIosAddCircle className="size-14 hover:cursor-pointer hover:text-highlight transition-all duration-300" />
          </Link>
        </div>

        {sortedLogs.map((log, index) => (
          <div
            key={index}
            className="w-full flex justify-center mb-10 last:mb-0"
          >
            <div className="w-full shadow-xl">
              <div className="p-4 bg-highlight space-y-10 rounded-md">
                <div className="flex justify-between items-center">
                  <div className="text-[24px] font-bold">{log.title}</div>
                  <div>
                    {new Date(log.createdAt).toLocaleString("en-GB", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                      timeZone: "Europe/London",
                    })}
                  </div>
                </div>
                {log.blocks && log.blocks.length > 0 ? (
                  log.blocks.map((block) => (
                    <LogBlockDisplay key={block.id} block={block} />
                  ))
                ) : (
                  <p className="text-lg italic font-semibold text-gray-600">
                    No content available for this log.
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
