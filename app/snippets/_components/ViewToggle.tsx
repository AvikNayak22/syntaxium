import { LayoutGrid, AlignJustify } from "lucide-react";

interface ViewToggleProps {
  view: "grid" | "list";
  setView: (view: "grid" | "list") => void;
  snippetCount: number;
}

const ViewToggle = ({ view, setView, snippetCount }: ViewToggleProps) => {
  return (
    <div className="ml-auto flex items-center gap-3">
      <span className="text-sm text-gray-500">
        {snippetCount} snippets found
      </span>

      <div className="flex items-center gap-1 p-1 bg-white/10 rounded-lg border border-white/10">
        <button
          onClick={() => setView("grid")}
          className={`p-2 rounded-md transition-all ${
            view === "grid"
              ? "bg-white/10 text-white"
              : "text-gray-400 hover:text-gray-300 hover:bg-white/10"
          }`}
        >
          <LayoutGrid className="w-4 h-4" />
        </button>
        <button
          onClick={() => setView("list")}
          className={`p-2 rounded-md transition-all ${
            view === "list"
              ? "bg-white/10 text-white"
              : "text-gray-400 hover:text-gray-300 hover:bg-white/10"
          }`}
        >
          <AlignJustify className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ViewToggle;
