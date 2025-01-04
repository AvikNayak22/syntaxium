import { Terminal } from "lucide-react";

export function EditorPanelSkeleton() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-500/5 via-transparent to-neutral-500/5 rounded-xl blur-2xl" />
      <div className="relative bg-black/90 backdrop-blur rounded-xl border border-neutral-800 p-6 h-[600px]">
        {/* Editor Area Skeleton */}
        <div className="relative rounded-xl overflow-hidden ring-1 ring-neutral-800">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-500/5 via-transparent to-neutral-500/5" />
          <div className="h-[600px] bg-neutral-950/50 backdrop-blur-sm p-4">
            {/* Code line skeletons */}
            {[...Array(15)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 mb-3">
                <div className={`w-12 h-4 bg-neutral-800/50 rounded`} />
                <div
                  className={`h-4 bg-neutral-800/50 rounded`}
                  style={{ width: `${Math.random() * 60 + 20}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-3 flex justify-end">
          <div className={`w-40 h-6 bg-neutral-800/50 rounded-lg`} />
        </div>
      </div>
    </div>
  );
}

export function OutputPanelSkeleton() {
  return (
    <div className="relative bg-black rounded-xl p-4 ring-1 ring-neutral-800">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-neutral-900 ring-1 ring-neutral-800">
            <Terminal className="w-4 h-4 text-neutral-400" />
          </div>
          <div className={`w-16 h-4 bg-neutral-800/50 rounded`} />
        </div>
      </div>

      {/* Output Area Skeleton */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-black rounded-xl -z-10" />
        <div className="relative bg-neutral-950/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-4 h-[600px]">
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div
                className={`w-12 h-12 mx-auto mb-4 bg-neutral-800/50 rounded-xl`}
              />
              <div className={`w-48 h-4 mx-auto bg-neutral-800/50 rounded`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Loading state for the entire editor view
export function EditorViewSkeleton() {
  return (
    <div className="space-y-6 p-4">
      <EditorPanelSkeleton />
      <OutputPanelSkeleton />
    </div>
  );
}
