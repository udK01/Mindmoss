import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import ExploreOurGames from "./components/ExploreOurGames";

function App() {
  return (
    <section>
      {/* <Header /> */}
      <Header />
      <Hero />
      <ExploreOurGames />
      {/* Background */}
      <div className="w-full h-full bg-beige absolute -z-50 inset-0" />
    </section>
  );
}

export default App;
