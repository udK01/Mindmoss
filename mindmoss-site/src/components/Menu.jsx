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
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed z-40 inset-0 bg-grass flex items-center justify-center font-roboto text-beige text-[64px]"
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
