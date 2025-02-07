import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-sm text-gray-300 mb-6"
      >
        <BookOpen className="w-4 h-4" />
        Snippet Collection
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-white mb-6"
      >
        Browse & Share You Code Snippets
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-400 mb-8"
      >
        Find and share useful code snippets with developers worldwide
      </motion.p>
    </div>
  );
};

export default HeroSection;
