import { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Contact from "./components/Contact";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./components/Home";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <Router>
      {/* <Header /> */}
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <AnimatePresence>{isOpen && <Menu />}</AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
