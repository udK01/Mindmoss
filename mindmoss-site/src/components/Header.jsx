import { Link } from "react-router-dom";

export default function Header({ isOpen, setIsOpen }) {
  return (
    <div className="fixed top-8 left-0 right-0 z-50 pointer-events-none">
      <div className="flex justify-between items-center px-16">
        {/* Logo on the left */}
        <Link to="/" className="pointer-events-auto">
          <img
            src="/Logo.png"
            alt="Logo"
            className="2xs:size-16 md:size-24 lg:size-36"
          />
        </Link>

        {/* Burger menu on the right */}
        <div
          className="w-[40px] h-[30px] flex flex-col justify-between cursor-pointer group pointer-events-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`h-[4px] bg-dark_gray transition-all duration-300 ${
              isOpen
                ? "rotate-45 translate-y-[13px] group-hover:bg-beige"
                : "group-hover:bg-highlight"
            }`}
          />
          <span
            className={`h-[4px] bg-dark_gray transition-all duration-300 group-hover:bg-highlight ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[4px] bg-dark_gray transition-all duration-300 ${
              isOpen
                ? "-rotate-45 -translate-y-[13px] group-hover:bg-beige"
                : "group-hover:bg-highlight"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
