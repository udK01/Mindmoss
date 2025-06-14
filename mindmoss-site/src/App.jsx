import { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { FiltersProvider } from "./components/Library/FilterProvider";
import GameDetail from "./components/Library/GameDetail";
import LogBuilder from "./components/DevLogs/LogBuilder";
import DevLogs from "./components/DevLogs/DevLogs";
import Library from "./components/Library/Library";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
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
      <ScrollToTop />
      {/* <Header /> */}
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <AnimatePresence>
        {isOpen && <Menu setIsOpen={setIsOpen} />}
      </AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />

        <Route
          path="/library"
          element={
            <FiltersProvider>
              <Library />
            </FiltersProvider>
          }
        />

        <Route path="/library/game/:gameId" element={<GameDetail />} />
        <Route path="/dev-logs" element={<DevLogs />} />
        <Route path="/add-logs" element={<LogBuilder />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
