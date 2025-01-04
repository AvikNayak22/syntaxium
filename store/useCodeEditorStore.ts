import { create } from "zustand";
import { LANGUAGE_CONFIG } from "@/app/code-editor/_constants";
import { Monaco } from "@monaco-editor/react";
import { CodeEditorState } from "@/types";

// Helper function to get the initial state of the editor
const getInitialState = () => {
  //if we are on the server side, return the default values
  if (typeof window === "undefined") {
    return {
      language: "javascript",
      fontSize: 16,
      theme: "vs-dark",
    };
  }

  //if we are on the client side, get the values from local storage
  const savedLanguage = localStorage.getItem("editor-language") || "javascript";
  const savedTheme = localStorage.getItem("editor-theme") || "vs-dark";
  const savedFontSize = localStorage.getItem("editor-font-size") || 16;

  return {
    language: savedLanguage,
    theme: savedTheme,
    fontSize: Number(savedFontSize),
  };
};

// Create a Zustand store for managing code editor state
export const useCodeEditorStore = create<CodeEditorState>((set, get) => {
  const initialState = getInitialState();

  return {
    // Spread initial state (language, theme, fontSize)
    ...initialState,
    // Initialize other state variables
    output: "",
    isRunning: false,
    error: null,
    editor: null,
    executionResult: null,

    // Get the current code from the editor
    getCode: () => get().editor?.getValue() || "",

    // Set up the Monaco editor instance and load saved code
    setEditor: (editor: Monaco) => {
      const savedCode = localStorage.getItem(`editor-code-${get().language}`);
      if (savedCode) editor.setValue(savedCode);
      set({ editor });
    },

    // Update the editor theme and save to localStorage
    setTheme: (theme: string) => {
      localStorage.setItem("editor-theme", theme);
      set({ theme });
    },

    // Update the font size and save to localStorage
    setFontSize: (fontSize: number) => {
      localStorage.setItem("editor-font-size", fontSize.toString());
      set({ fontSize });
    },

    // Change the programming language and handle code preservation
    setLanguage: (language: string) => {
      // Save current code before switching languages
      const currentCode = get().editor?.getValue();
      if (currentCode) {
        localStorage.setItem(`editor-code-${get().language}`, currentCode);
      }

      localStorage.setItem("editor-language", language);

      // Reset output and error states when changing language
      set({
        language,
        output: "",
        error: null,
      });
    },

    // Execute the code using the Piston API
    runCode: async () => {
      const { language, getCode } = get();
      const code = getCode();

      // Validate if there's code to run
      if (!code) {
        set({ error: "No code to run" });
        return;
      }

      // Set initial running state
      set({ isRunning: true, error: null, output: "" });

      try {
        // Get runtime configuration for the current language
        const runtime = LANGUAGE_CONFIG[language].pistonRuntime;

        // Make API request to Piston execution service
        const response = await fetch(`https://emkc.org/api/v2/piston/execute`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            language: runtime.language,
            version: runtime.version,
            files: [
              {
                content: code,
              },
            ],
          }),
        });

        const data = await response.json();

        console.log("Data from Piston:", data);

        // Handle API error messages
        if (data.message) {
          set({
            error: data.message,
            executionResult: { code, output: "", error: data.message },
          });
          return;
        }

        // Handle compilation errors
        if (data.compile && data.compile.code !== 0) {
          const error = data.compile.stderr || data.compile.output;
          set({
            error,
            executionResult: { code, output: "", error },
          });
          return;
        }

        // Handle runtime errors
        if (data.run && data.run.code !== 0) {
          const error = data.run.stderr || data.run.output;
          set({
            error,
            executionResult: { code, output: "", error },
          });
          return;
        }

        // Set successful execution output
        const output = data.run.output;
        set({
          output: output.trim(),
          error: null,
          executionResult: { code, output: output.trim(), error: null },
        });
      } catch (error) {
        // Handle unexpected errors
        console.log("Error running code:", error);
        set({
          error: "An error occurred while running the code.",
          executionResult: {
            code,
            output: "",
            error: "An error occurred while running the code.",
          },
        });
      } finally {
        // Reset running state
        set({ isRunning: false });
      }
    },
  };
});

// Helper function to get the latest execution result from the store
export const getExecutionResult = () =>
  useCodeEditorStore.getState().executionResult;
