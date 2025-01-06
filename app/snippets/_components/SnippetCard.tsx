"use client";

import { api } from "@/convex/_generated/api";
import { Snippet } from "@/types";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { useState } from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Trash2, User } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import StarButton from "@/components/StarButton";

const SnippetCard = ({ snippet }: { snippet: Snippet }) => {
  const { user } = useUser();
  const deleteSnippet = useMutation(api.snippets.deleteSnippet);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      await deleteSnippet({ snippetId: snippet._id });
    } catch (error) {
      console.log("Error deleting snippet:", error);
      toast.error("Error deleting snippet!");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <motion.div
      layout
      className="group relative bg-neutral-900 hover:shadow-lg transition-shadow duration-300 rounded-lg"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/snippets/${snippet._id}`} className="block h-full">
        <div
          className="relative h-full bg-neutral-900 rounded-xl 
      border border-neutral-700 hover:border-neutral-500
      transition-all duration-300 overflow-hidden"
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                {/* Language Icon */}
                <div className="relative">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-neutral-500 to-neutral-700 rounded-md opacity-30 group-hover:opacity-50"
                    aria-hidden="true"
                  />
                  <div className="relative p-3 bg-neutral-700/20 rounded-md group-hover:bg-neutral-600/30 transition-all">
                    <Image
                      src={`/${snippet.language}.png`}
                      alt={`${snippet.language} logo`}
                      className="w-6 h-6 object-contain"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>

                {/* Language and Date */}
                <div>
                  <span className="px-3 py-1 bg-neutral-700 text-neutral-300 rounded-md text-xs font-medium">
                    {snippet.language}
                  </span>
                  <div className="flex items-center text-xs text-neutral-400 mt-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(snippet._creationTime).toLocaleDateString()}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <StarButton snippetId={snippet._id} />

                {user?.id === snippet.userId && (
                  <button
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all
                ${
                  isDeleting
                    ? "bg-red-500/20 text-red-400 cursor-not-allowed"
                    : "bg-neutral-700 hover:bg-red-500 hover:text-white"
                }`}
                    aria-label="Delete Snippet"
                  >
                    {isDeleting ? (
                      <div className="w-4 h-4 border-2 border-red-400/30 border-t-red-400 rounded-full animate-spin" />
                    ) : (
                      <Trash2 className="w-4 h-4" />
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Title and Author */}
            <div>
              <h2 className="text-lg font-semibold text-neutral-400 mb-2 line-clamp-1 group-hover:text-white">
                {snippet.title}
              </h2>
              <div className="flex items-center gap-2 text-sm text-neutral-400 mb-4">
                <User className="w-4 h-4" />
                <span className="truncate">{snippet.userName}</span>
              </div>
            </div>

            {/* Code Preview */}
            <div className="relative">
              <div
                className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-md opacity-50 group-hover:opacity-75 transition-all"
                aria-hidden="true"
              />
              <pre className="relative bg-neutral-800 p-4 rounded-md text-sm text-neutral-300 font-mono line-clamp-3">
                {snippet.code}
              </pre>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default SnippetCard;
