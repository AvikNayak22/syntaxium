import EditorPanel from "@/app/code-editor/_components/EditorPanel";
import Header from "@/app/code-editor/_components/Header";
import OutputPanel from "@/app/code-editor/_components/OutputPanel";

export default function CodeEditorPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1800px] mx-auto p-4">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <EditorPanel />
          <OutputPanel />
        </div>
      </div>
    </div>
  );
}
