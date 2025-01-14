"use client";

import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { useEffect, useState } from "react";
import { defineMonacoThemes, LANGUAGE_CONFIG } from "../_constants";
import {
  MinusIcon,
  PlusIcon,
  RefreshCcw,
  Settings,
  Share2,
  TypeIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Editor } from "@monaco-editor/react";
import { useClerk } from "@clerk/nextjs";
import { EditorPanelSkeleton } from "./EditorPanelSkeleton";
import useMounted from "@/hooks/useMounted";
import ShareSnippetDialog from "./ShareSnippetDialog";

const EditorPanel = () => {
  const clerk = useClerk();
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const { language, theme, fontSize, setFontSize, editor, setEditor } =
    useCodeEditorStore();
  const mounted = useMounted();

  useEffect(() => {
    const savedCode = localStorage.getItem(`editor-code-${language}`);
    const newCode = savedCode || LANGUAGE_CONFIG[language].defaultCode;

    if (editor) editor.setValue(newCode);
  }, [language, editor]);

  useEffect(() => {
    const savedFontSize = localStorage.getItem("editor-font-size");
    if (savedFontSize) setFontSize(parseInt(savedFontSize));
  }, [setFontSize]);

  const handleRefresh = () => {
    const defaultCode = LANGUAGE_CONFIG[language].defaultCode;
    if (editor) editor.setValue(defaultCode);
    localStorage.removeItem(`editor-code-${language}`);
  };

  const handleEditorChange = (value: string | undefined) => {
    if (value) localStorage.setItem(`editor-code-${language}`, value);
  };

  const handleFontSizeChange = (newSize: number) => {
    const size = Math.min(Math.max(newSize, 10), 24);
    setFontSize(size);
    localStorage.setItem("editor-font-size", size.toString());
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
            <div className="hidden md:flex items-center gap-3 px-3 py-2 bg-neutral-900 rounded-lg ring-1 ring-neutral-800">
              <TypeIcon className="size-4 text-neutral-400" />
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleFontSizeChange(fontSize - 1)}
                  className="p-1 ring-1 ring-neutral-800 hover:bg-neutral-800 rounded"
                >
                  <MinusIcon className="size-4 text-neutral-400" />
                </button>
                <span className="text-sm font-medium text-neutral-400 min-w-[2rem] text-center">
                  {fontSize}
                </span>
                <button
                  onClick={() => handleFontSizeChange(fontSize + 1)}
                  className="p-1 ring-1 ring-neutral-800 hover:bg-neutral-800 rounded"
                >
                  <PlusIcon className="size-4 text-neutral-400" />
                </button>
              </div>
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
              <span className="text-sm font-medium">Share</span>
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
    </div>
  );
};

export default EditorPanel;
