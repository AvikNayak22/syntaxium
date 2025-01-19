"use client";

import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LANGUAGE_CONFIG } from "../_constants";
import Image from "next/image";
import { ChevronDownIcon } from "lucide-react";
import useMounted from "@/hooks/useMounted";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useCodeEditorStore();
  const mounted = useMounted();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentLanguageObj = LANGUAGE_CONFIG[language];

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

  const handleLanguageSelect = (langId: string) => {
    setLanguage(langId);
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Language selector button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center gap-3 px-4 py-2.5 bg-zinc-800/90 
      rounded-lg transition-all 
       duration-200 border border-white/10 hover:border-white/20`}
      >
        {/* Hover gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-500/5 to-neutral-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Language logo container */}
        <div className="size-6 rounded-md bg-white/5 p-0.5 group-hover:scale-110 transition-transform">
          <Image
            src={currentLanguageObj.logoPath}
            alt="programming language logo"
            width={24}
            height={24}
            className="w-full h-full object-contain relative z-10"
          />
        </div>

        {/* Language label */}
        <span className="text-white/90 min-w-[80px] text-left group-hover:text-white transition-colors">
          {currentLanguageObj.label}
        </span>

        {/* Dropdown arrow icon */}
        <ChevronDownIcon
          className={`size-4 text-white/60 transition-all duration-300 group-hover:text-white/90
            ${isOpen ? "rotate-180" : ""}`}
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
            className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl
           rounded-xl border border-white/10 shadow-2xl py-2 z-50"
          >
            {/* Dropdown header */}
            <div className="px-3 pb-2 mb-2 border-b border-white/10">
              <p className="text-xs font-medium text-white/60">
                Select Language
              </p>
            </div>

            {/* Language options list */}
            <div className="max-h-[280px] overflow-y-auto overflow-x-hidden">
              {Object.values(LANGUAGE_CONFIG).map((lang, index) => (
                <motion.div
                  key={lang.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group px-2"
                >
                  {/* Language option button */}
                  <button
                    className={`
                      relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
                      ${language === lang.id ? "bg-neutral-800 text-neutral-400" : "text-white/80"}
                      hover:bg-neutral-900
                    `}
                    onClick={() => handleLanguageSelect(lang.id)}
                  >
                    {/* Hover gradient effect */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-neutral-500/5 to-neutral-400/5 rounded-lg 
                      opacity-0 group-hover:opacity-100 transition-opacity"
                    />

                    {/* Language logo container */}
                    <div
                      className={`
                         relative size-8 rounded-lg p-1.5 group-hover:scale-110 transition-transform
                         ${language === lang.id ? "bg-neutral-500/10" : "bg-white/5"}
                       `}
                    >
                      {/* Logo background gradient */}
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-neutral-500/10 to-violet-500/10 rounded-lg 
                        opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      <Image
                        width={24}
                        height={24}
                        src={lang.logoPath}
                        alt={`${lang.label} logo`}
                        className="w-full h-full object-contain relative z-10"
                      />
                    </div>

                    {/* Language name */}
                    <span className="flex-1 text-left group-hover:text-white transition-colors">
                      {lang.label}
                    </span>

                    {/* Selected language indicator */}
                    {language === lang.id && (
                      <motion.div
                        className="absolute inset-0 border-2 border-white/20 rounded-lg"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
