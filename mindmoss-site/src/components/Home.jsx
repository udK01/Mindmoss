import ExploreOurGames from "./ExploreOurGames";
import Patreon from "./Patreon";
import Hero from "./Hero/Hero";

export default function Home() {
  return (
    <section className="overflow-x-hidden">
      <Hero />
      <ExploreOurGames />
      <Patreon />
    </section>
  );
}
