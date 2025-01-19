"use client";

import { X } from "lucide-react";
import React from "react";
import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";
import FontSizeControls from "./FontSizeControls";

const SettingsDialog = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-black rounded-lg p-6 w-full max-w-md border border-zinc-800">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Editor Settings</h2>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-4">
          <h3 className="block text-sm font-medium text-zinc-400 mb-2">
            Select Language
          </h3>
          <LanguageSelector />
        </div>

        <div className="mb-4">
          <h3 className="block text-sm font-medium text-zinc-400 mb-2">
            Select Theme
          </h3>
          <ThemeSelector />
        </div>

        <div className="mb-4">
          <h3 className="block text-sm font-medium text-zinc-400 mb-2">
            Font Size
          </h3>
          <FontSizeControls />
        </div>
      </div>
    </div>
  );
};

export default SettingsDialog;
