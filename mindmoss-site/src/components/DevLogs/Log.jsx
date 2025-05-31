import { FaChevronDown } from "react-icons/fa";

export default function Log() {
  return (
    <div className=" w-full max-w-[1200px] h-[100px] bg-grass text-white rounded-[30px] shadow-lg hover:shadow-[#4c6a51] hover:bg-highlight hover:text-black hover:cursor-pointer transition-all duration-300 group">
      <div className="flex h-full justify-between items-center px-[40px] text-[24px] font-roboto font-semibold">
        <div>31/05/2025</div>
        <div className="w-[70%] line-clamp-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, eius.
          Nulla rerum sed magnam ex. Explicabo perferendis
        </div>
        <FaChevronDown className="text-black size-10 group-hover:text-beige group-hover:hover:cursor-pointer transition-all duration-300 " />
      </div>
    </div>
  );
}
