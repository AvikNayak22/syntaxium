import NavigationHeader from "@/components/NavigationHeader";

function SnippetLoadingSkeleton() {
  return (
    <div className="min-h-screen bg-black">
      <NavigationHeader />
      <main className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="max-w-[1200px] mx-auto">
          {/* Skeleton Header */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-6 sm:p-8 mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-12 rounded-xl bg-zinc-900 animate-pulse" />
                <div>
                  <div className="h-8 w-48 bg-zinc-900 rounded-lg animate-pulse mb-2" />
                  <div className="flex gap-4">
                    <div className="h-5 w-24 bg-zinc-900 rounded animate-pulse" />
                    <div className="h-5 w-24 bg-zinc-900 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
            {/* Skeleton Code Editor */}
            <div className="h-[400px] bg-zinc-900 rounded-xl animate-pulse" />
          </div>
        </div>
      </main>
    </div>
  );
}
export default SnippetLoadingSkeleton;
