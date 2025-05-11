import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";

import Menu from "./components/Menu";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import ExploreOurGames from "./components/ExploreOurGames";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <section>
      {/* <Header /> */}
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <AnimatePresence>{isOpen && <Menu />}</AnimatePresence>
      <Hero />
      <ExploreOurGames />
      {/* Background */}
      <div className="w-full h-full bg-beige absolute -z-50 inset-0" />
    </section>
  );
}

export default App;
