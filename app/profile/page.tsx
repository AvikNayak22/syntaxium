"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { usePaginatedQuery, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { motion, AnimatePresence } from "framer-motion";
import { ListVideo, Star } from "lucide-react";
import NavigationHeader from "@/components/NavigationHeader";
import ProfileHeader from "./_components/ProfileHeader";
import ProfileHeaderSkeleton from "./_components/ProfileHeaderSkeleton";
import TabButton from "./_components/TabButton";
import ExecutionsTab from "./_components/ExecutionTab";
import StarredTab from "./_components/StarredTab";

const TABS = [
  {
    id: "executions",
    label: "Code Executions",
    icon: ListVideo,
  },
  {
    id: "starred",
    label: "Starred Snippets",
    icon: Star,
  },
];

const ProfilePage = () => {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"executions" | "starred">(
    "executions"
  );

  const userStats = useQuery(api.codeExecutions.getUserStats, {
    userId: user?.id ?? "",
  });

  const starredSnippets = useQuery(api.snippets.getStarredSnippets);
  const userData = useQuery(api.users.getUser, { userId: user?.id ?? "" });

  const {
    results: executions,
    status: executionStatus,
    isLoading: isLoadingExecutions,
    loadMore,
  } = usePaginatedQuery(
    api.codeExecutions.getUserExecutions,
    { userId: user?.id ?? "" },
    { initialNumItems: 5 }
  );

  if (!user && isLoaded) return router.push("/");

  return (
    <div className="min-h-screen bg-black">
      <NavigationHeader />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {userStats && userData ? (
          <ProfileHeader
            userStats={userStats}
            userData={userData}
            user={user!}
          />
        ) : (
          <ProfileHeaderSkeleton />
        )}

        <div className="bg-zinc-900/40 rounded-xl shadow-2xl border border-[#333333] overflow-hidden">
          <div className="border-b border-[#333333]">
            <div className="flex space-x-1 p-4">
              {TABS.map((tab) => (
                <TabButton
                  key={tab.id}
                  {...tab}
                  isActive={activeTab === tab.id}
                  onClick={() =>
                    setActiveTab(tab.id as "executions" | "starred")
                  }
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-6"
            >
              {activeTab === "executions" ? (
                <ExecutionsTab
                  executions={executions}
                  isLoading={isLoadingExecutions}
                  canLoadMore={executionStatus === "CanLoadMore"}
                  onLoadMore={() => loadMore(5)}
                />
              ) : (
                <StarredTab snippets={starredSnippets ?? []} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
