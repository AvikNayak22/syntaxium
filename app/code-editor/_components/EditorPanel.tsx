"use client";

import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { useEffect, useState } from "react";
import { defineMonacoThemes, LANGUAGE_CONFIG } from "../_constants";
import { RefreshCcw, Settings, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Editor } from "@monaco-editor/react";
import { useClerk } from "@clerk/nextjs";
import { EditorPanelSkeleton } from "./EditorPanelSkeleton";
import useMounted from "@/hooks/useMounted";
import ShareSnippetDialog from "./ShareSnippetDialog";
import SettingsDialog from "./SettingsDialog";
import FontSizeControls from "./FontSizeControls";

const EditorPanel = () => {
  const clerk = useClerk();

  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [isSettingsDialogOpen, setIsSettingsDialogOpen] = useState(false);

  const { language, theme, fontSize, setFontSize, editor, setEditor } =
    useCodeEditorStore();

  const mounted = useMounted();

  // Load code from local storage on language change or editor mount
  useEffect(() => {
    const savedCode = localStorage.getItem(`editor-code-${language}`);
    const newCode = savedCode || LANGUAGE_CONFIG[language].defaultCode;

    if (editor) editor.setValue(newCode);
  }, [language, editor]);

  // Load font size from local storage on mount
  useEffect(() => {
    const savedFontSize = localStorage.getItem("editor-font-size");
    if (savedFontSize) setFontSize(parseInt(savedFontSize));
  }, [setFontSize]);

  // Reset code to default
  const handleRefresh = () => {
    const defaultCode = LANGUAGE_CONFIG[language].defaultCode;
    if (editor) editor.setValue(defaultCode);
    localStorage.removeItem(`editor-code-${language}`);
  };

  // Save code to local storage on change
  const handleEditorChange = (value: string | undefined) => {
    if (value) localStorage.setItem(`editor-code-${language}`, value);
  };

  if (!mounted) return null;

  return (
    <div className="relative">
      <div className="relative bg-zinc-900 backdrop-blur rounded-xl border border-neutral-800 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-900 ring-1 ring-neutral-800">
              <Image
                src={"/" + language + ".png"}
                alt="Logo"
                width={24}
                height={24}
              />
            </div>
            <div className="">
              <h2 className="text-sm font-medium text-neutral-200">
                Code Editor
              </h2>
              <p className="hidden md:block text-xs text-neutral-500">
                Write and execute your code
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Font Size Controls */}
            <div className="hidden md:block">
              <FontSizeControls />
            </div>

            {/* Refesh Code Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRefresh}
              className="p-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg ring-1 ring-neutral-800 transition-colors"
              aria-label="Reset to default code"
            >
              <RefreshCcw className="size-4 text-neutral-400" />
            </motion.button>

            {/* Settings Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="block lg:hidden p-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg ring-1 ring-neutral-800 transition-colors"
              aria-label="Editor Settings"
              onClick={() => setIsSettingsDialogOpen(true)}
            >
              <Settings className="size-4 text-neutral-400" />
            </motion.button>

            {/* Share Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsShareDialogOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg overflow-hidden bg-white text-black transition-colors"
            >
              <Share2 className="size-4" />
              <span className="text-sm font-medium hidden md:block">Share</span>
            </motion.button>
          </div>
        </div>

        {/* Editor */}
        <div className="relative group rounded-xl overflow-hidden ring-1 ring-neutral-800">
          {clerk.loaded && (
            <Editor
              height="600px"
              language={LANGUAGE_CONFIG[language].monacoLanguage}
              onChange={handleEditorChange}
              theme={theme}
              beforeMount={defineMonacoThemes}
              onMount={(editor) => setEditor(editor)}
              options={{
                minimap: { enabled: false },
                fontSize,
                automaticLayout: true,
                scrollBeyondLastLine: false,
                padding: { top: 16, bottom: 16 },
                renderWhitespace: "selection",
                fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace',
                fontLigatures: true,
                cursorBlinking: "smooth",
                smoothScrolling: true,
                contextmenu: true,
                renderLineHighlight: "all",
                lineHeight: 1.6,
                letterSpacing: 0.5,
                roundedSelection: true,
                scrollbar: {
                  verticalScrollbarSize: 8,
                  horizontalScrollbarSize: 8,
                },
              }}
            />
          )}

          {!clerk.loaded && <EditorPanelSkeleton />}
        </div>
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
