import { Snippet } from "@/types";
import Link from "next/link";
import { Clock, ChevronRight } from "lucide-react";
import StarButton from "@/components/StarButton";
import Image from "next/image";

interface StarredSnippetCardProps {
  snippet: Snippet;
}

const StarredSnippetCard = ({ snippet }: StarredSnippetCardProps) => (
  <div className="group relative">
    <Link href={`/snippets/${snippet._id}`}>
      <div
        className="bg-[#1a1a1a] rounded-xl border border-[#333333] hover:border-white/20 
          transition-all duration-300 overflow-hidden h-full group-hover:transform
          group-hover:scale-[1.02]"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-white/5 rounded-lg blur group-hover:opacity-30 transition-opacity" />
                <Image
                  src={`/${snippet.language}.png`}
                  alt={`${snippet.language} logo`}
                  className="relative z-10"
                  width={40}
                  height={40}
                />
              </div>
              <span className="px-3 py-1 bg-white/5 text-white rounded-lg text-sm">
                {snippet.language}
              </span>
            </div>
            <div
              className="absolute top-6 right-6 z-10"
              onClick={(e) => e.preventDefault()}
            >
              <StarButton snippetId={snippet._id} />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-white mb-3 line-clamp-1 group-hover:text-gray-300 transition-colors">
            {snippet.title}
          </h2>
          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>
                {new Date(snippet._creationTime).toLocaleDateString()}
              </span>
            </div>
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
        <div className="px-6 pb-6">
          <div className="bg-black/30 rounded-lg p-4 overflow-hidden">
            <pre className="text-sm text-gray-300 font-mono line-clamp-3">
              {snippet.code}
            </pre>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default StarredSnippetCard;
