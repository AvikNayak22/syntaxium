import { SignedIn } from "@clerk/nextjs";
import { Code2, Terminal } from "lucide-react";
import Link from "next/link";
import React from "react";
import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";
import RunButton from "./RunButton";
import HeaderProfileButton from "./HeaderProfileButton";

const Header = async () => {
  return (
    <div className="relative z-10">
      {/* Main Header Container */}
      <div className="flex items-center md:justify-between justify-center bg-zinc-900/80 backdrop-blur-xl p-6 mb-4 rounded-lg ring-1 ring-white/10">
        {/* Left Section*/}
        <div className="flex items-center gap-8">
          {/* Logo and Brand Name */}
          <Link href="/" className="flex items-center gap-3 group relative">
            {/* Gradient Background Effect */}
            <div
              className="absolute -inset-2 bg-gradient-to-r from-white/10 to-gray-500/10 rounded-lg opacity-0 
                group-hover:opacity-100 transition-all duration-500 blur-xl"
            />
            {/* Logo Container */}
            <div
              className="relative bg-gradient-to-br from-black to-zinc-900 p-2 rounded-xl ring-1
              ring-white/10 group-hover:ring-white/20 transition-all"
            >
              <Terminal className="size-6 text-white transform hover:rotate-6 transition-transform duration-500" />
            </div>

            {/* Brand Text */}
            <div className="flex flex-col">
              <span className="block text-lg font-semibold text-white">
                Syntaxium
              </span>
              <span className="block text-xs text-gray-400 font-medium">
                Interactive Code Editor
              </span>
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav className="flex items-center space-x-1">
            {/* Snippets Link */}
            <Link
              href="/snippets"
              className="relative group hidden md:flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-zinc-800/60 
                hover:bg-white/10 border border-zinc-800 hover:border-white/20 transition-all duration-300 shadow-lg overflow-hidden"
            >
              {/* Hover Gradient Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-white/5 
                to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <Code2 className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
              <span
                className="text-sm font-medium relative z-10 group-hover:text-white
                 transition-colors"
              >
                Snippets
              </span>
            </Link>
          </nav>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Theme and Language Selectors */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeSelector />
            <LanguageSelector />
          </div>

          {/* Run Button - Only visible when signed in */}
          <SignedIn>
            <RunButton />
          </SignedIn>

          {/* Profile Button Section */}
          <div className="flex pl-3 border-l border-zinc-800">
            <HeaderProfileButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
