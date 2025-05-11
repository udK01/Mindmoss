import ExploreOurGames from "./ExploreOurGames";
import Hero from "./Hero/Hero";

export default function Home() {
  return (
    <section>
      <Hero />
      <ExploreOurGames />
      {/* Background */}
      <div className="w-full h-full bg-beige absolute -z-50 inset-0" />
    </section>
  );
}
