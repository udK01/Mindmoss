import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Menu({ setIsOpen }) {
  let classStyle =
    "hover:cursor-pointer hover:text-orange-500 transition-all duration-300";

  const links = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/library", label: "Library" },
    { to: "/dev-logs", label: "Dev Logs" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }} // stops flush with right edge
      exit={{ x: "100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed z-40 top-0 right-0 h-full 2xs:w-[50%] lg:w-[40%] xl:w-[30%] bg-grass flex items-center justify-center font-roboto text-beige 2xs:text-[32px] md:text-[48px] lg:text-[64px] shadow-lg"
    >
      <div className="flex flex-col space-y-10">
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={classStyle}
            onClick={() => setIsOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
