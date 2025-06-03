import { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

import LogBlockDisplay from "./LogBlockDisplay";

export default function Log({ log }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  const formattedDate = log.createdAt
    ? new Date(log.createdAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "Unknown date";

  return (
    <div className="w-full max-w-[1200px]">
      <div
        onClick={() => setOpen(!open)}
        className={`h-[100px] ${
          open
            ? "rounded-t-[30px] text-black hover:text-white hover:bg-grass hover:shadow-black bg-highlight"
            : "text-white hover:text-black rounded-[30px] hover:bg-highlight hover:shadow-[#4c6a51] bg-grass"
        } hover:cursor-pointer transition-all duration-300 group z-30 relative`}
        style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)" }}
      >
        <div className="flex h-full justify-between items-center px-[40px] text-[24px] font-roboto font-semibold">
          <div>{formattedDate}</div>
          <div className="w-[70%] line-clamp-1">{log.title}</div>
          <FaChevronDown
            className={`text-black size-10 group-hover:text-beige ${
              open && "rotate-180"
            } transition-all duration-300`}
          />
        </div>
      </div>

      <div
        ref={contentRef}
        className={`relative z-10 overflow-hidden transition-all duration-500 ease-in-out font-poppins text-sm md:text-base ${
          open ? "h-full" : "h-0"
        }`}
        style={{
          maxHeight: open ? `${contentRef.current?.scrollHeight}px` : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="p-4 bg-highlight space-y-10">
          {log.blocks && log.blocks.length > 0 ? (
            log.blocks.map((block) => (
              <LogBlockDisplay key={block.id} block={block} />
            ))
          ) : (
            <p className="text-lg italic text-gray-600">
              No content available for this log.
            </p>
          )}
        </div>
        <img
          src="./DevLogImages/Drip.png"
          alt="Drip"
          className="w-full block"
        />
      </div>
    </div>
  );
}

// import { useRef, useState } from "react";
// import { FaChevronDown } from "react-icons/fa";

// export default function Log({ log }) {
//   const [open, setOpen] = useState(false);
//   const contentRef = useRef(null);

//   return (
//     <div className="w-full max-w-[1200px]">
//       <div
//         onClick={() => setOpen(!open)}
//         className={`h-[100px] ${
//           open
//             ? "rounded-t-[30px] text-black hover:text-white hover:bg-grass hover:shadow-black bg-highlight"
//             : "text-white hover:text-black rounded-[30px]  hover:bg-highlight hover:shadow-[#4c6a51] bg-grass"
//         } hover:cursor-pointer transition-all duration-300 group z-30 relative`}
//         style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)" }}
//       >
//         <div className="flex h-full justify-between items-center px-[40px] text-[24px] font-roboto font-semibold">
//           <div>31/05/2025</div>
//           <div className="w-[70%] line-clamp-1">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
//             eius. Nulla rerum sed magnam ex. Explicabo perferendis
//           </div>
//           <FaChevronDown
//             className={`text-black size-10 group-hover:text-beige ${
//               open && "rotate-180"
//             } transition-all duration-300`}
//           />
//         </div>
//       </div>

//       <div
//         ref={contentRef}
//         className={`relative z-10 overflow-hidden transition-all duration-500 ease-in-out font-poppins text-sm md:text-base ${
//           open ? "h-full" : "h-0"
//         }`}
//         style={{
//           maxHeight: open ? `${contentRef.current?.scrollHeight}px` : "0px",
//           opacity: open ? 1 : 0,
//         }}
//       >
//         <div className="p-4 bg-highlight">
//           <p className="text-lg">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
//             eligendi optio error inventore velit, commodi similique ab sed, in
//             quis minima quia, sequi expedita reiciendis eaque! Similique quaerat
//             hic quas.
//           </p>
//         </div>
//         <img
//           src="./DevLogImages/Drip.png"
//           alt="Drip"
//           className="w-full block"
//         />
//       </div>
//     </div>
//   );
// }
