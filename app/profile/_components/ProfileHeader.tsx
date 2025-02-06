import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { UserResource } from "@clerk/types";
import { useQuery } from "convex/react";
import { Activity, Timer, Star, Trophy, Code2, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProfileHeaderProps {
  userStats: {
    totalExecutions: number;
    languagesCount: number;
    languages: string[];
    last24Hours: number;
    favouriteLanguage: string;
    languageStats: Record<string, number>;
    mostStarredLanguage: string;
  };

  userData: {
    _id: Id<"users">;
    _creationTime: number;
    userId: string;
    email: string;
    name: string;
  };

  user: UserResource;
}

const ProfileHeader = ({ userStats, userData, user }: ProfileHeaderProps) => {
  const starredSnippets = useQuery(api.snippets.getStarredSnippets);
  const STATS = [
    {
      label: "Code Executions",
      value: userStats?.totalExecutions ?? 0,
      icon: Activity,
      color: "from-blue-500 to-cyan-500",
      gradient: "group-hover:via-blue-400",
      description: "Total code runs",
      metric: {
        label: "Last 24h",
        value: userStats?.last24Hours ?? 0,
        icon: Timer,
      },
    },
    {
      label: "Starred Snippets",
      value: starredSnippets?.length ?? 0,
      icon: Star,
      color: "from-yellow-500 to-orange-500",
      gradient: "group-hover:via-yellow-400",
      description: "Saved for later",
      metric: {
        label: "Most starred",
        value: userStats?.mostStarredLanguage ?? "N/A",
        icon: Trophy,
      },
    },
    {
      label: "Languages Used",
      value: userStats?.languagesCount ?? 0,
      icon: Code2,
      color: "from-purple-500 to-pink-500",
      gradient: "group-hover:via-purple-400",
      description: "Different languages",
      metric: {
        label: "Most used",
        value: userStats?.favouriteLanguage ?? "N/A",
        icon: TrendingUp,
      },
    },
  ];

  return (
    <div className="relative mb-8 bg-zinc-900/40 rounded-2xl p-8 border border-[#333333] overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
      <div className="relative flex items-center gap-8">
        <div className="relative group">
          <div
            className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-full 
      blur-xl opacity-50 group-hover:opacity-75 transition-opacity"
          />
          <Image
            src={user.imageUrl}
            alt="Profile"
            width={96}
            height={96}
            className="rounded-full border-2 border-gray-800 relative z-10 group-hover:scale-105 transition-transform"
          />
        </div>
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-white">{userData.name}</h1>
          </div>
          <p className="text-gray-400 flex items-center gap-2">
            {userData.email}
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {STATS.map((stat, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index}
            className="group relative bg-[#1a1a1a] hover:bg-white/10 rounded-lg overflow-hidden transition-colors duration-300"
          >
            {/* Content */}
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

              {/* Additional metric */}
              <div className="flex items-center gap-2 pt-4 border-t border-[#333333]">
                <stat.metric.icon className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-400">
                  {stat.metric.label}:
                </span>
                <span className="text-sm font-medium text-white">
                  {stat.metric.value}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default ProfileHeader;
