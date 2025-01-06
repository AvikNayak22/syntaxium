const CardSkeleton = () => (
  <div className="relative group">
    <div className="bg-black/40 rounded-xl border border-white/20 overflow-hidden h-[280px] backdrop-blur-sm">
      <div className="p-6 space-y-4">
        {/* Header shimmer */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/20 animate-pulse" />
            <div className="space-y-2">
              <div className="w-24 h-6 bg-white/20 rounded-lg animate-pulse" />
              <div className="w-20 h-4 bg-white/20 rounded-lg animate-pulse" />
            </div>
          </div>
          <div className="w-16 h-8 bg-white/20 rounded-lg animate-pulse" />
        </div>

        {/* Title shimmer */}
        <div className="space-y-2">
          <div className="w-3/4 h-7 bg-white/20 rounded-lg animate-pulse" />
          <div className="w-1/2 h-5 bg-white/20 rounded-lg animate-pulse" />
        </div>

        {/* Code block shimmer */}
        <div className="space-y-2 bg-black/50 rounded-lg p-4">
          <div className="w-full h-4 bg-white/20 rounded animate-pulse" />
          <div className="w-3/4 h-4 bg-white/20 rounded animate-pulse" />
          <div className="w-1/2 h-4 bg-white/20 rounded animate-pulse" />
        </div>
      </div>
    </div>
  </div>
);

export default function SnippetsPageSkeleton() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section Skeleton */}
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="w-48 h-8 bg-white/20 rounded-full mx-auto animate-pulse" />
          <div className="w-96 h-12 bg-white/20 rounded-xl mx-auto animate-pulse" />
          <div className="w-72 h-6 bg-white/20 rounded-lg mx-auto animate-pulse" />
        </div>

        {/* Search and Filters Skeleton */}
        <div className="max-w-5xl mx-auto mb-12 space-y-6">
          {/* Search bar */}
          <div className="relative">
            <div className="w-full h-14 bg-black/40 rounded-xl border border-white/20 backdrop-blur-sm animate-pulse" />
          </div>

          {/* Language filters */}
          <div className="flex flex-wrap gap-2">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-24 h-8 bg-white/20 rounded-lg animate-pulse"
                style={{
                  animationDelay: `${i * 100}ms`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i}>
              <CardSkeleton />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}