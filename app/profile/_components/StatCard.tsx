import { motion } from "framer-motion";

interface StatMetric {
  label: string;
  value: string | number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface StatCard {
  label: string;
  value: string | number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  gradient: string;
  description: string;
  metric: StatMetric;
}
interface StatCardProps {
  stat: StatCard;
  index: number;
}

const StatCard = ({ stat, index }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-[#1a1a1a] hover:bg-white/10 rounded-lg overflow-hidden transition-colors duration-300"
    >
      <div className="relative p-6">
        <div className="flex items-start justify-between mb-4 border-[#333333]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-medium text-gray-400">
                {stat.description}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {typeof stat.value === "number"
                ? stat.value.toLocaleString()
                : stat.value}
            </h3>
            <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
          </div>
          <div className="p-3 rounded-lg bg-zinc-800 group-hover:bg-zinc-700 transition-colors duration-300">
            <stat.icon className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center gap-2 pt-4 border-t border-[#333333]">
          <stat.metric.icon className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-400">{stat.metric.label}:</span>
          <span className="text-sm font-medium text-white">
            {stat.metric.value}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;
