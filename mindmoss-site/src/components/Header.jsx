export default function Header({ isOpen, setIsOpen }) {
  return (
    <div className="fixed top-8 right-4 flex items-center justify-end text-white px-[32px] z-50 w-full">
      <div
        className="w-[40px] h-[30px] flex flex-col justify-between cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`h-[4px] bg-dark_gray transition-all duration-300 group-hover:bg-grass ${
            isOpen ? "rotate-45 translate-y-[13px]" : ""
          }`}
        />
        <span
          className={`h-[4px] bg-dark_gray transition-all duration-300 group-hover:bg-grass ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`h-[4px] bg-dark_gray transition-all duration-300 group-hover:bg-grass ${
            isOpen ? "-rotate-45 -translate-y-[13px]" : ""
          }`}
        />
      </div>
    </div>
  );
}
