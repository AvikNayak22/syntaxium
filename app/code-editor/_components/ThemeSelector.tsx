"use client";

import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { useEffect, useRef, useState } from "react";
import { THEMES } from "../_constants";
import { AnimatePresence, motion } from "framer-motion";
import {
  CircleOff,
  Cloud,
  Github,
  Laptop,
  Moon,
  Palette,
  Sun,
} from "lucide-react";
import useMounted from "@/hooks/useMounted";

const THEME_ICONS: Record<string, React.ReactNode> = {
  "vs-dark": <Moon className="size-4" />,
  "vs-light": <Sun className="size-4" />,
  "github-dark": <Github className="size-4" />,
  monokai: <Laptop className="size-4" />,
  "solarized-dark": <Cloud className="size-4" />,
};

const ThemeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useCodeEditorStore();
  const mounted = useMounted();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentTheme = THEMES.find((t) => t.id === theme);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Theme selector button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-48 group relative flex items-center gap-2 px-4 py-2.5 bg-zinc-800/90 hover:bg-zinc-800/70 
        rounded-lg transition-all duration-200 border border-white/10 hover:border-white/20"
      >
        {/* Hover state background decorator */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-500/5 to-neutral-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Theme icon */}
        <Palette className="w-4 h-4 text-neutral-400 group-hover:text-neutral-300 transition-colors" />

        {/* Theme label */}
        <span className="text-neutral-300 min-w-[80px] text-left group-hover:text-white transition-colors">
          {currentTheme?.label}
        </span>

        {/* Theme color indicator */}
        <div
          className="relative w-4 h-4 rounded-full border border-neutral-600 group-hover:border-neutral-500 transition-colors"
          style={{ background: currentTheme?.color }}
        />
      </motion.button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-full min-w-[240px] bg-black/95 
            backdrop-blur-xl rounded-xl border border-neutral-800 shadow-2xl py-2 z-50"
          >
            {/* Dropdown header */}
            <div className="px-2 pb-2 mb-2 border-b border-neutral-800">
              <p className="text-xs font-medium text-neutral-400 px-2">
                Select Theme
              </p>
            </div>

            {/* Theme options list */}
            {THEMES.map((t, index) => (
              <motion.button
                key={t.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`
                relative group w-full flex items-center gap-3 px-3 py-2.5 hover:bg-neutral-900 transition-all duration-200
                ${theme === t.id ? "bg-neutral-800 text-white" : "text-neutral-300"}
              `}
                onClick={() => setTheme(t.id)}
              >
                {/* Theme option background gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-neutral-500/5 to-neutral-400/5 opacity-0 
              group-hover:opacity-100 transition-opacity"
                />

                {/* Theme option icon */}
                <div
                  className={`
                flex items-center justify-center size-8 rounded-lg
                ${theme === t.id ? "bg-white/10 text-white" : "bg-neutral-800/50 text-neutral-400"}
                group-hover:scale-110 transition-all duration-200
              `}
                >
                  {THEME_ICONS[t.id] || <CircleOff className="w-4 h-4" />}
                </div>

                {/* Theme option label */}
                <span className="flex-1 text-left group-hover:text-white transition-colors">
                  {t.label}
                </span>

                {/* Theme option color indicator */}
                <div
                  className="relative size-4 rounded-full border border-neutral-600 
                group-hover:border-neutral-500 transition-colors"
                  style={{ background: t.color }}
                />

                {/* Active theme indicator */}
                {theme === t.id && (
                  <motion.div
                    className="absolute inset-0 border-2 border-white/20 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSelector;
