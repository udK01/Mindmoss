// pages/LogBuilder.jsx
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import LogBlock from "./LogBlock";
import "./LogBuilder.css";

import { AiFillPicture } from "react-icons/ai";
import { RiTextBlock } from "react-icons/ri";
import {
  BsLayoutTextSidebar,
  BsLayoutTextSidebarReverse,
} from "react-icons/bs";

export default function LogBuilder() {
  const [blocks, setBlocks] = useState([]);

  const addBlock = (type) => {
    const newBlock = {
      id: uuidv4(),
      type,
      content: {
        text: "Sample text here...",
        imageUrl: "./Placeholder.jpg",
      },
    };
    setBlocks([...blocks, newBlock]);
  };

  const moveBlock = (index, direction) => {
    const newBlocks = [...blocks];
    const targetIndex = index + direction;

    if (targetIndex < 0 || targetIndex >= blocks.length) return;

    const [moved] = newBlocks.splice(index, 1);
    newBlocks.splice(targetIndex, 0, moved);
    setBlocks(newBlocks);
  };

  const removeBlock = (index) => {
    const newBlocks = blocks.filter((_, i) => i !== index);
    setBlocks(newBlocks);
  };

  return (
    <section className="min-h-screen bg-beige">
      <div className="max-w-4xl mx-auto px-4 pb-40 pt-20">
        <h1 className="text-3xl font-bold mb-4">Dev Log Builder</h1>

        <div className="flex flex-wrap gap-2 mb-6">
          <button onClick={() => addBlock("left-image")} className="btn">
            <BsLayoutTextSidebar className="size-10" />
          </button>
          <button onClick={() => addBlock("right-image")} className="btn">
            <BsLayoutTextSidebarReverse className="size-10" />
          </button>
          <button onClick={() => addBlock("full-text")} className="btn">
            <RiTextBlock className="size-10" />
          </button>
          <button onClick={() => addBlock("full-image")} className="btn">
            <AiFillPicture className="size-10" />
          </button>
        </div>

        {blocks.map((block, i) => (
          <div key={block.id} className="relative">
            <LogBlock block={block} />

            <div className="flex justify-end gap-2 mb-4">
              <button onClick={() => moveBlock(i, -1)} className="btn">
                ↑
              </button>
              <button onClick={() => moveBlock(i, 1)} className="btn">
                ↓
              </button>
              <button
                onClick={() => removeBlock(i)}
                className="btn text-red-600 hover:text-red-600"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
