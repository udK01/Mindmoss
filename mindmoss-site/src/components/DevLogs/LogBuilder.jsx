import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import LogBlock from "./LogBlock";

import { AiFillPicture } from "react-icons/ai";
import { RiTextBlock } from "react-icons/ri";
import {
  BsLayoutTextSidebar,
  BsLayoutTextSidebarReverse,
} from "react-icons/bs";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useDevLogs } from "../../context/DevLogProvider";

export default function LogBuilder() {
  const { addLog } = useDevLogs();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
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

  const handleSave = () => {
    if (!title.trim()) {
      alert("Title cannot be empty!");
      return;
    }

    const newLog = {
      id: uuidv4(),
      title: title.trim(),
      blocks,
      createdAt: new Date().toISOString(),
    };

    addLog(newLog);

    setTitle("");
    setBlocks([]);

    navigate("/dev-logs");
  };

  return (
    <section className="min-h-screen bg-beige overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 pb-40 pt-20">
        <div className="flex items-center gap-4 mb-4">
          <Link
            to={"/dev-logs"}
            className="text-[40px] rounded-lg hover:text-grass transition-all duration-300"
          >
            <FaArrowAltCircleLeft />
          </Link>
          <h1 className="text-3xl font-bold">Dev Log Builder</h1>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => addBlock("left-image")}
            className="text-[20px] px-4 py-2 rounded-lg bg-highlight hover:text-white hover:bg-grass transition-all duration-300"
          >
            <BsLayoutTextSidebar className="size-10" />
          </button>
          <button
            onClick={() => addBlock("right-image")}
            className="text-[20px] px-4 py-2 rounded-lg bg-highlight hover:text-white hover:bg-grass transition-all duration-300"
          >
            <BsLayoutTextSidebarReverse className="size-10" />
          </button>
          <button
            onClick={() => addBlock("full-text")}
            className="text-[20px] px-4 py-2 rounded-lg bg-highlight hover:text-white hover:bg-grass transition-all duration-300"
          >
            <RiTextBlock className="size-10" />
          </button>
          <button
            onClick={() => addBlock("full-image")}
            className="text-[20px] px-4 py-2 rounded-lg bg-highlight hover:text-white hover:bg-grass transition-all duration-300"
          >
            <AiFillPicture className="size-10" />
          </button>
        </div>

        <input
          type="text"
          placeholder="Enter log title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 mb-6 bg-transparent border-b-2 border-dotted border-grass focus:outline-none rounded-md text-lg"
        />

        {blocks.map((block, i) => (
          <div key={block.id} className="relative">
            <LogBlock
              block={block}
              onChange={(updatedBlock) => {
                const updated = [...blocks];
                updated[i] = updatedBlock;
                setBlocks(updated);
              }}
            />

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

        {/* Save button */}
        <div className="w-full flex items-center justify-end">
          <button
            onClick={handleSave}
            disabled={!title.trim()}
            className={`text-[20px] px-4 py-2 rounded-lg bg-highlight text-black hover:text-white hover:bg-grass transition-all duration-300 btn ${
              !title.trim() ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Save Log
          </button>
        </div>
      </div>
    </section>
  );
}
