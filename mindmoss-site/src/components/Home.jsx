import ExploreOurGames from "./ExploreOurGames";
import Hero from "./Hero/Hero";

export default function Home() {
  return (
    <section className="overflow-x-hidden">
      <Hero />
      <ExploreOurGames />
    </section>
  );
}
