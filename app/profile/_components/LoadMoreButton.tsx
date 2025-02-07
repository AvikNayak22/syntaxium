import { ChevronRight } from "lucide-react";

interface LoadMoreButtonProps {
  onClick: () => void;
}

const LoadMoreButton = ({ onClick }: LoadMoreButtonProps) => (
  <div className="flex justify-center mt-8">
    <button
      onClick={onClick}
      className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white rounded-lg flex items-center gap-2 
      transition-colors"
    >
      Load More
      <ChevronRight className="w-4 h-4" />
    </button>
  </div>
);

export default LoadMoreButton;
