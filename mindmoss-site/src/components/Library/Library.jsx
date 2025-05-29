import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdGridView, MdViewList } from "react-icons/md";

import LibraryCard from "./LibraryCard";
import LibrarySquare from "./LibrarySquare";

const libraryCardInfo = [
  {
    gameId: 1,
    image: "./GameImages/game1.png",
    title: "Five Night Tenancy",
    tags: ["Strategy", "Puzzle"],
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
    image: "./GameImages/game6.png",
    title: "Dance Of The Froggermancer",
    tags: ["Rhythm", "Roguelike"],
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
    image: "./GameImages/game2.png",
    title: "Athmospheric Onslaught",
    tags: ["Survival", "Card Game"],
    playerCount: "Single Player",
    duration: "45 Minutes",
    description: `In Atmospheric Onslaught, you defend your little town from wave after wave of aggressive dirty storms. Place lightning rods to absorb the impact, Cotton Arrays to block the wind. Or perhaps solar shields to defend from the heavens? 

Dont go bankrupt - the more you build, the more you pay. Keep your buildings repaired; they generate more money if you do!`,
  },
];

export default function Library() {
  const [displayGrid, setDisplayGrid] = useState(true);

  return (
    <section className="bg-beige flex flex-col items-center h-full min-h-screen relative pt-40">
      <div className="w-full flex items-center justify-end px-[20%] pb-[4%]">
        <MdViewList
          title="List View"
          className={`size-10 ${
            !displayGrid && "text-grass"
          } hover:text-grass hover:cursor-pointer transition-all duration-300`}
          onClick={() => setDisplayGrid(false)}
        />
        <MdGridView
          title="Grid View"
          className={`size-10 ${
            displayGrid && "text-grass"
          } hover:text-grass hover:cursor-pointer transition-all duration-300`}
          onClick={() => setDisplayGrid(true)}
        />
      </div>
      <AnimatePresence mode="wait">
        {displayGrid ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {libraryCardInfo.map((librarySquare, index) => (
              <LibrarySquare
                key={index}
                index={index}
                gameId={librarySquare.gameId}
                title={librarySquare.title}
                image={librarySquare.image}
                tags={librarySquare.tags}
                playerCount={librarySquare.playerCount}
                duration={librarySquare.duration}
                description={librarySquare.description}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {libraryCardInfo.map((libraryCard, index) => (
              <LibraryCard
                key={index}
                top={index !== 0}
                bottom={index !== libraryCardInfo.length - 1}
                image={libraryCard.image}
                title={libraryCard.title}
                tags={libraryCard.tags}
                playerCount={libraryCard.playerCount}
                duration={libraryCard.duration}
                description={libraryCard.description}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
