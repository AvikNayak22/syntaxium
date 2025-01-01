import { Terminal } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative border-t border-zinc-800/50 mt-auto">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-zinc-900 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-zinc-400">
            <Terminal className="size-5" />
            <span>Syntaxium - Code Smarter</span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="https://twitter.com"
              className="text-zinc-400 hover:text-zinc-300 transition-colors"
            >
              Twitter
            </Link>
            <Link
              href="https://github.com"
              className="text-zinc-400 hover:text-zinc-300 transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-zinc-400 hover:text-zinc-300 transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>{" "}
      </div>
    </footer>
  );
}
export default Footer;
