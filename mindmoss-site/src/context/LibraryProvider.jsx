import { createContext, useContext } from "react";

const libraryCardInfo = [
  {
    gameId: 1,
    image: "/GameImages/game1.png",
    steam: "",
    itch: "https://marshs.itch.io/five-night-tenancy",
    title: "Five Night Tenancy",
    tags: ["Strategy", "Puzzle"],
    creator: ["marshs", "tbage"],
    playerCount: "Single Player",
    duration: "45 Minutes",
    description: `Your Grandma's creepy old statue leaves something to be desired, and all your 
belongings keep inexplicably breaking or turning themselves on. Your landlord doesn't believe 
you and is keen to kick you out - keep his patience high by managing hazards throughout your 
apartment. Oh, and don't forget to pickup the post.

Five Night Tenancy was created by Tbage and marshs over the course of five days for the Brackeys 
2025.1 game jam and all of its art and music is entirely original. It's a simple game about moving 
into an apartment – what can possibly go wrong?`,
  },
  {
    gameId: 2,
    image: "/GameImages/game6.png",
    steam: "",
    itch: "https://marshs.itch.io/froggermancer",
    title: "Dance Of The Froggermancer",
    tags: ["Rhythm", "Roguelike"],
    creator: ["marshs"],
    playerCount: "Single Player",
    duration: "45 Minutes",
    description: `As the last Froggermancer, you must battle your way through treacherous passages full of traps and lethal enemies!
However... you can only move to the beat of the music.
Time your moves to hop from tile to tile; battling your enemies, honing your skills and collecting spells to ease your traversal.
The more beats you hit, the higher your score will be.

Inspired by legendary games like Frogger and Crypt of the Necrodancer, Dance of the Froggermancer 
challenges your reflexes, your strategic thinking and rhythmic ability.`,
  },
  {
    gameId: 3,
    image: "/GameImages/game2.png",
    steam: "",
    itch: "https://marshs.itch.io/atmospheric-onslaught",
    title: "Athmospheric Onslaught",
    tags: ["Survival", "Card Game"],
    creator: ["marshs", "tbage"],
    playerCount: "Single Player",
    duration: "45 Minutes",
    description: `In Atmospheric Onslaught, you defend your little town from wave after wave of aggressive dirty storms. Place lightning rods to absorb the impact, Cotton Arrays to block the wind. Or perhaps solar shields to defend from the heavens? 

Dont go bankrupt - the more you build, the more you pay. Keep your buildings repaired; they generate more money if you do!`,
  },
  {
    gameId: 4,
    image: "/GameImages/game7.png",
    steam: "https://store.steampowered.com/app/2077120/Hive/",
    itch: "",
    title: "Hive",
    tags: ["Tower Defense", "Time Management"],
    creator: ["tbage"],
    playerCount: "Single Player",
    duration: "120 Minutes",
    description: `Stranded in another solar system on a confusing planet, you must source fuel for your ship. You'll learn how to research, build and defend in increasingly hostile scenarios across the planet. Hive tasks you with mastering three components of colonisation:
- Agriculture: providing food to your structures to boost their productivity,
- Industry: mining resources and refining them,
- Defence: preventing your thin walls from being torn down by local inhabitants with several creative solutions.

To get off the planet you must capture and extract from local hives and harvest crystals from deep within them. Liquefy these crystals directly into fuel and say goodbye. The mites won't miss you.`,
  },
];

const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  return (
    <LibraryContext.Provider value={{ libraryCardInfo }}>
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibrary = () => useContext(LibraryContext);
