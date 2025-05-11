import { motion } from "framer-motion";

export default function Menu() {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed z-40 inset-0 bg-grass flex items-center justify-center font-roboto text-beige text-[64px]"
    >
      <div className="flex flex-col space-y-10">
        <div>About Us</div>
        <div>Library</div>
        <div>Dev Logs</div>
        <div>Contact</div>
      </div>
    </motion.div>
  );
}
