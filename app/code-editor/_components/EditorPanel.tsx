"use client";

import { useState } from "react";
import useMounted from "@/hooks/useMounted";
import ShareSnippetDialog from "./ShareSnippetDialog";
import SettingsDialog from "./SettingsDialog";
import EditorHeader from "./EditorHeader";
import CodeEditor from "./CodeEditor";
import { EditorPanelSkeleton } from "./EditorPanelSkeleton";
import { useClerk } from "@clerk/nextjs";

const EditorPanel = () => {
  const clerk = useClerk();

  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [isSettingsDialogOpen, setIsSettingsDialogOpen] = useState(false);

  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <div className="relative">
      <div className="relative bg-zinc-900 backdrop-blur rounded-xl border border-neutral-800 p-6">
        <EditorHeader
          onSettingsClick={() => setIsSettingsDialogOpen(true)}
          onShareClick={() => setIsShareDialogOpen(true)}
        />
        <CodeEditor />

        {!clerk.loaded && <EditorPanelSkeleton />}
      </div>
      {isShareDialogOpen && (
        <ShareSnippetDialog onClose={() => setIsShareDialogOpen(false)} />
      )}
      {isSettingsDialogOpen && (
        <SettingsDialog onClose={() => setIsSettingsDialogOpen(false)} />
      )}
    </div>
  );
};

export default EditorPanel;
