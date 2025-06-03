import { FaFilter } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

import Log from "./Log";

import { useDevLogs } from "../../context/DevLogProvider";
import { Link } from "react-router-dom";

export default function DevLogs() {
  const { logs } = useDevLogs();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-[200px] bg-beige">
      <div className="w-[60%] py-10 flex items-center justify-end">
        <FaFilter className="size-10 hover:cursor-pointer hover:text-grass transition-all duration-300" />
        <Link to={"/add-logs"}>
          <IoIosAddCircle className="size-14 hover:cursor-pointer hover:text-grass transition-all duration-300" />
        </Link>
      </div>
      <div className="w-[80%] flex flex-col space-y-10 items-center">
        {logs.map((log, idx) => (
          <Log key={idx} log={log} />
        ))}
      </div>
    </section>
  );
}
