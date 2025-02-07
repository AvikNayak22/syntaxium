import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TabButtonProps {
  label: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick: () => void;
}

const TabButton = ({
  label,
  icon: Icon,
  isActive,
  onClick,
}: TabButtonProps) => (
  <button
    onClick={onClick}
    className={`group flex items-center gap-2 px-6 py-2.5 rounded-lg transition-all duration-200 relative overflow-hidden ${
      isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
    }`}
  >
    {isActive && (
      <motion.div
        layoutId="activeTab"
        className="absolute inset-0 bg-white/10 rounded-lg"
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      />
    )}
    <Icon className="w-4 h-4 relative z-10" />
    <span className="text-sm font-medium relative z-10">{label}</span>
  </button>
);

export default TabButton;
