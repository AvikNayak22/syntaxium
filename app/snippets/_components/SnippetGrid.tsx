import { motion, AnimatePresence } from "framer-motion";
import { type Doc } from "@/convex/_generated/dataModel";
import SnippetCard from "./SnippetCard";

interface SnippetsGridProps {
  snippets: Doc<"snippets">[];
  view: "grid" | "list";
}

const SnippetsGrid = ({ snippets, view }: SnippetsGridProps) => {
  return (
    <motion.div
      className={`grid gap-6 ${
        view === "grid"
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-1 max-w-3xl mx-auto"
      }`}
      layout
    >
      <AnimatePresence mode="popLayout">
        {snippets.map((snippet) => (
          <SnippetCard key={snippet._id} snippet={snippet} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default SnippetsGrid;
