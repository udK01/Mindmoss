import { FaRegUserCircle, FaRegClock } from "react-icons/fa";

export default function LibrarySquare({ index, title, image }) {
  return (
    <div
      className="relative bg-grass rounded-lg hover:cursor-pointer text-white opacity-0 animate-up"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="p-4">
        <div className="font-robot font-semibold 2xs:text-[20px] md:text-[24px] lg:text-[28px] line-clamp-1 text-center">
          {title}
        </div>
      </div>
      <div className="w-full">
        <img src={image} className="w-full rounded-lg object-cover" />
      </div>
    </div>
  );
}
