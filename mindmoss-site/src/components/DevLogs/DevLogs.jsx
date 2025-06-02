import { FaFilter } from "react-icons/fa";

import Log from "./Log";

export default function DevLogs() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-[200px] bg-beige">
      <div className="w-[60%] py-10 flex justify-end">
        <FaFilter className="size-10 hover:cursor-pointer hover:text-grass transition-all duration-300" />
      </div>
      <div className="w-[80%] flex flex-col space-y-10 items-center">
        <Log />
        <Log />
        <Log />
        <Log />
      </div>
    </section>
  );
}
