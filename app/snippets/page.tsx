"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useState } from "react";
import SnippetsPageSkeleton from "./_components/SnippetsPageSkeleton";
import NavigationHeader from "@/components/NavigationHeader";
import HeroSection from "./_components/HeroSection";
import LanguageFilter from "./_components/LanguageFilter";
import SearchBar from "./_components/SearchBar";
import SnippetsGrid from "./_components/SnippetGrid";
import ViewToggle from "./_components/ViewToggle";

const SnippetsPage = () => {
  const snippets = useQuery(api.snippets.getSnippets);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [view, setView] = useState<"grid" | "list">("grid");

  if (snippets === undefined) {
    return (
      <div className="min-h-screen">
        <NavigationHeader />
        <SnippetsPageSkeleton />
      </div>
    );
  }

  const languages = [...new Set(snippets.map((s) => s.language))];
  const popularLanguages = languages.slice(0, 5);

  const filteredSnippets = snippets.filter((snippet) => {
    const matchesSearch =
      snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      snippet.language.toLowerCase().includes(searchQuery.toLowerCase()) ||
      snippet.userName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLanguage =
      !selectedLanguage || snippet.language === selectedLanguage;

    return matchesSearch && matchesLanguage;
  });

  return (
    <div className="min-h-screen bg-black">
      <NavigationHeader />

      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(24, 24, 24) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <HeroSection />

        <div className="relative max-w-5xl mx-auto mb-12 space-y-6">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          <div className="flex flex-wrap items-center gap-4">
            <LanguageFilter
              languages={popularLanguages}
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
            />
            <ViewToggle
              view={view}
              setView={setView}
              snippetCount={filteredSnippets.length}
            />
          </div>
        </div>

        <SnippetsGrid snippets={filteredSnippets} view={view} />
      </div>
    </div>
  );
};

export default SnippetsPage;
