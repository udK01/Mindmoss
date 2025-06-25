import { createContext, useContext } from "react";

const libraryCardInfo = [
  {
    gameId: 1,
    image: "/GameImages/game1.png",
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
    title: "Athmospheric Onslaught",
    tags: ["Survival", "Card Game"],
    creator: ["marshs", "tbage"],
    playerCount: "Single Player",
    duration: "45 Minutes",
    description: `In Atmospheric Onslaught, you defend your little town from wave after wave of aggressive dirty storms. Place lightning rods to absorb the impact, Cotton Arrays to block the wind. Or perhaps solar shields to defend from the heavens? 

Dont go bankrupt - the more you build, the more you pay. Keep your buildings repaired; they generate more money if you do!`,
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
