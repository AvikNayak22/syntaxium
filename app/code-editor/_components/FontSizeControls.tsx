"use client";

import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { MinusIcon, PlusIcon, TypeIcon } from "lucide-react";
import React from "react";

const FontSizeControls = () => {
  const { fontSize, setFontSize } = useCodeEditorStore();

  const handleFontSizeChange = (newSize: number) => {
    const size = Math.min(Math.max(newSize, 10), 24);
    setFontSize(size);
    localStorage.setItem("editor-font-size", size.toString());
  };

  return (
    <div className="w-40 flex items-center gap-3 px-3 py-2 bg-neutral-900 rounded-lg ring-1 ring-neutral-800">
      <TypeIcon className="size-4 text-neutral-400" />
      <div className="flex items-center gap-3">
        <button
          onClick={() => handleFontSizeChange(fontSize - 1)}
          className="p-1 ring-1 ring-neutral-800 hover:bg-neutral-800 rounded"
        >
          <MinusIcon className="size-4 text-neutral-400" />
        </button>
        <span className="text-sm font-medium text-neutral-400 min-w-[2rem] text-center">
          {fontSize}
        </span>
        <button
          onClick={() => handleFontSizeChange(fontSize + 1)}
          className="p-1 ring-1 ring-neutral-800 hover:bg-neutral-800 rounded"
        >
          <PlusIcon className="size-4 text-neutral-400" />
        </button>
      </div>
    </div>
  );
};

export default FontSizeControls;
