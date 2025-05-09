import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <section>
      {/* <Header /> */}
      {/* ... */}
      <Hero />
      {/* Background */}
      <img src="./Paper.png" className="absolute -z-50 inset-0" />
    </section>
  );
}

export default App;
