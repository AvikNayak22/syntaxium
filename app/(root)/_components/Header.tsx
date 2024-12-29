import { api } from "@/convex/_generated/api";
import { SignedIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { Blocks, Code2, Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";
import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";
import RunButton from "./RunButton";
import HeaderProfileButton from "./HeaderProfileButton";

const Header = async () => {
  const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  const user = await currentUser();

  const convexUser = await convex.query(api.users.getUser, {
    userId: user?.id || "",
  });

  return (
    <div className="relative z-10">
      {/* Main Header Container */}
      <div className="flex items-center lg:justify-between justify-center bg-[#0a0a0f]/80 backdrop-blur-xl p-6 mb-4 rounded-lg">
        {/* Left Section - Logo and Navigation (Hidden on mobile) */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Logo and Brand Name */}
          <Link href="/" className="flex items-center gap-3 group relative">
            {/* Gradient Background Effect */}
            <div
              className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-purple-500/20 rounded-lg opacity-0 
                group-hover:opacity-100 transition-all duration-500 blur-xl"
            />
            {/* Logo Container */}
            <div
              className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1
              ring-white/10 group-hover:ring-white/20 transition-all"
            >
              <Blocks className="size-6 text-emerald-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
            </div>

            {/* Brand Text */}
            <div className="flex flex-col">
              <span className="block text-lg font-semibold bg-gradient-to-r from-emerald-400 via-emerald-300 to-purple-400 text-transparent bg-clip-text">
                Syntaxium
              </span>
              <span className="block text-xs text-emerald-400/60 font-medium">
                Interactive Code Editor
              </span>
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav className="flex items-center space-x-1">
            {/* Snippets Link */}
            <Link
              href="/snippets"
              className="relative group flex items-center gap-2 px-4 py-1.5 rounded-lg text-slate-300 bg-slate-800/50 
                hover:bg-emerald-500/10 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 shadow-lg overflow-hidden"
            >
              {/* Hover Gradient Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 
                to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
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

        {/* Right Section - Theme, Language, Pro Button, and Profile */}
        <div className="flex items-center gap-4">
          {/* Theme and Language Selectors */}
          <div className="flex items-center gap-3">
            <ThemeSelector />
            <LanguageSelector hasAccess={Boolean(convexUser?.isPro)} />
          </div>

          {/* Pro Subscription Button - Only shown for non-pro users */}
          {!convexUser?.isPro && (
            <Link
              href="/pricing"
              className="flex items-center gap-2 px-4 py-1.5 rounded-lg border border-amber-500/20 hover:border-amber-500/40 bg-gradient-to-r from-amber-500/10 
                to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20 
                transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 text-amber-400 hover:text-amber-300" />
              <span className="text-sm font-medium text-amber-400/90 hover:text-amber-300">
                Pro
              </span>
            </Link>
          )}

          {/* Run Button - Only visible when signed in */}
          <SignedIn>
            <RunButton />
          </SignedIn>

          {/* Profile Button Section */}
          <div className="pl-3 border-l border-slate-800">
            <HeaderProfileButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
