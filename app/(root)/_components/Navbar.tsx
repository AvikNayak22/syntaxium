"use client";

import { Terminal } from "lucide-react";
import { useRouter } from "next/navigation";

export function Navbar() {
  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-black/50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-white" />
            <span className="text-lg font-medium text-white">Syntaxium</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => router.push("/code-editor")}
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition-all hover:bg-gray-100"
            >
              Start Coding
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
