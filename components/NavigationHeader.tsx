import HeaderProfileBtn from "@/app/code-editor/_components/HeaderProfileButton";
import { SignedIn } from "@clerk/nextjs";
import { Code2, SquareGanttChart, Terminal } from "lucide-react";
import Link from "next/link";

function NavigationHeader() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-neutral-800/50 bg-black/60 backdrop-blur-xl backdrop-saturate-150">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-white/[0.02]" />

      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Header content wrapper */}
        <div className="relative h-16 flex items-center justify-between">
          {/* Left section: Logo and navigation links */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* Logo and brand section */}
            <Link
              href="/"
              className="flex items-center gap-2 md:gap-3 group relative"
            >
              {/* Hover effect background for logo */}
              <div
                className="absolute -inset-2 bg-gradient-to-r from-white/5 to-white/5 rounded-lg opacity-0 
              group-hover:opacity-100 transition-all duration-500 blur-xl"
              />

              {/* Terminal icon container */}
              <div
                className="relative bg-gradient-to-br from-black to-zinc-900 p-1.5 md:p-2 rounded-xl ring-1
              ring-white/10 group-hover:ring-white/20 transition-all"
              >
                <Terminal className="size-5 md:size-6 text-white transform hover:rotate-6 transition-transform duration-500" />
              </div>

              {/* Brand text container */}
              <div className="relative">
                <span className="block text-base md:text-lg font-semibold text-white">
                  Syntaxium
                </span>
                <span className="hidden md:block text-xs text-gray-400 font-medium">
                  Interactive Code Editor
                </span>
              </div>
            </Link>

            {/* Navigation links container */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Snippets link - only visible when signed in */}
              <SignedIn>
                <Link
                  href="/snippets"
                  className="relative group flex items-center gap-1.5 md:gap-2 px-2 md:px-4 py-1.5 rounded-lg text-gray-300 bg-zinc-800/60 
                  hover:bg-white/10 border border-zinc-800 hover:border-white/20 transition-all duration-300 shadow-lg overflow-hidden"
                >
                  {/* Hover effect overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-white/5 
                to-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <Code2 className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
                  <span className="text-xs md:text-sm font-medium relative z-10 group-hover:text-white transition-colors">
                    Snippets
                  </span>
                </Link>
              </SignedIn>

              {/* Editor link - always visible */}
              <Link
                href="/code-editor"
                className="relative group flex items-center gap-1.5 md:gap-2 px-2 md:px-4 py-1.5 rounded-lg text-gray-300 bg-zinc-800/60 
                  hover:bg-white/10 border border-zinc-800 hover:border-white/20 transition-all duration-300 shadow-lg overflow-hidden"
              >
                {/* Hover effect overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-white/5 
                to-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <SquareGanttChart className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
                <span className="text-xs md:text-sm font-medium relative z-10 group-hover:text-white transition-colors">
                  Editor
                </span>
              </Link>
            </div>
          </div>

          {/* Right section: Profile button */}
          <div className="flex items-center gap-2 md:gap-4">
            <HeaderProfileBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationHeader;
