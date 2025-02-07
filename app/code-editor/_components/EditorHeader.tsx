"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RefreshCcw, Settings, Share2 } from "lucide-react";
import FontSizeControls from "./FontSizeControls";
import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { LANGUAGE_CONFIG } from "../_constants";

interface EditorHeaderProps {
  onSettingsClick: () => void;
  onShareClick: () => void;
}

const EditorHeader = ({ onSettingsClick, onShareClick }: EditorHeaderProps) => {
  const { language, editor } = useCodeEditorStore();

  const handleRefresh = () => {
    const defaultCode = LANGUAGE_CONFIG[language].defaultCode;
    if (editor) editor.setValue(defaultCode);
    localStorage.removeItem(`editor-code-${language}`);
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-900 ring-1 ring-neutral-800">
          <Image src={`/${language}.png`} alt="Logo" width={24} height={24} />
        </div>
        <div>
          <h2 className="text-sm font-medium text-neutral-200">Code Editor</h2>
          <p className="hidden md:block text-xs text-neutral-500">
            Write and execute your code
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden md:block">
          <FontSizeControls />
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRefresh}
          className="p-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg ring-1 ring-neutral-800 transition-colors"
          aria-label="Reset to default code"
        >
          <RefreshCcw className="size-4 text-neutral-400" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="block lg:hidden p-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg ring-1 ring-neutral-800 transition-colors"
          aria-label="Editor Settings"
          onClick={onSettingsClick}
        >
          <Settings className="size-4 text-neutral-400" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onShareClick}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg overflow-hidden bg-white text-black transition-colors"
        >
          <Share2 className="size-4" />
          <span className="text-sm font-medium hidden md:block">Share</span>
        </motion.button>
      </div>
    </div>
  );
};

export default EditorHeader;
