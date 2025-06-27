import { Link } from "react-router-dom";

export default function Header({ isOpen, setIsOpen }) {
  return (
    <div className="fixed top-8 right-4 flex items-center justify-between text-white px-[32px] z-50 w-full">
      <Link to={"/"}>
        <img
          src="/Logo.png"
          alt="Logo"
          className="2xs:size-16 md:size-24 lg:size-36"
        />
      </Link>
      <div
        className="w-[40px] h-[30px] flex flex-col justify-between cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`h-[4px] bg-dark_gray transition-all duration-300 ${
            isOpen
              ? "rotate-45 translate-y-[13px] group-hover:bg-beige"
              : "group-hover:bg-grass"
          }`}
        />
        <span
          className={`h-[4px] bg-dark_gray transition-all duration-300 group-hover:bg-grass ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`h-[4px] bg-dark_gray transition-all duration-300 ${
            isOpen
              ? "-rotate-45 -translate-y-[13px] group-hover:bg-beige"
              : "group-hover:bg-grass"
          }`}
        />
      </div>
    </div>
  );
}
