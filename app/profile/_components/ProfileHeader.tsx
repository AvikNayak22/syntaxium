import { Activity, Timer, Star, Trophy, Code2, TrendingUp } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import StatCard from "./StatCard";
import ProfileInfo, { ProfileInfoProps } from "./ProfileInfo";
import { UserResource } from "@clerk/types";

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
  userData: ProfileInfoProps["userData"];
  user: UserResource;
}

const ProfileHeader = ({ userStats, userData, user }: ProfileHeaderProps) => {
  const starredSnippets = useQuery(api.snippets.getStarredSnippets);

  const STATS: StatCard[] = [
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
      <ProfileInfo userData={userData} user={user} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {STATS.map((stat, index) => (
          <StatCard key={index} stat={stat} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProfileHeader;
