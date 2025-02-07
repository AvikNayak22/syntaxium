"use client";

import { Editor } from "@monaco-editor/react";
import { useClerk } from "@clerk/nextjs";
import { defineMonacoThemes, LANGUAGE_CONFIG } from "../_constants";
import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { useEffect } from "react";

const CodeEditor = () => {
  const clerk = useClerk();

  const { language, theme, fontSize, editor, setEditor } = useCodeEditorStore();

  useEffect(() => {
    const savedCode = localStorage.getItem(`editor-code-${language}`);
    const newCode = savedCode || LANGUAGE_CONFIG[language].defaultCode;

    if (editor) editor.setValue(newCode);
  }, [language, editor]);

  const handleEditorChange = (value: string | undefined) => {
    if (value) localStorage.setItem(`editor-code-${language}`, value);
  };

  return (
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
    </div>
  );
};

export default CodeEditor;
