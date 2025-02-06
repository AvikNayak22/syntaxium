function ProfileHeaderSkeleton() {
  return (
    <div className="relative mb-8 bg-black rounded-2xl p-8 border border-white/10 overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0" />
      <div className="relative flex items-center gap-8">
        {/* Avatar Skeleton */}
        <div className="relative">
          <div className="absolute inset-0 bg-white/10 rounded-full blur-xl" />
          <div className="w-24 h-24 rounded-full bg-white/10 animate-pulse relative z-10 border-4 border-white/5" />
        </div>

        {/* User Info Skeleton */}
        <div className="space-y-3">
          <div className="h-8 w-48 bg-white/10 rounded animate-pulse" />
          <div className="h-5 w-32 bg-white/10 rounded animate-pulse" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="group relative p-4 rounded-xl bg-white/5 border border-white/10 overflow-hidden shadow-md"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-5" />
            <div className="relative space-y-4">
              {/* Stat Header */}
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="h-4 w-24 bg-white/10 rounded animate-pulse" />
                  <div className="h-8 w-16 bg-white/10 rounded animate-pulse" />
                  <div className="h-4 w-32 bg-white/10 rounded animate-pulse" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/10 animate-pulse" />
              </div>

              {/* Stat Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                <div className="h-4 w-4 bg-white/10 rounded animate-pulse" />
                <div className="h-4 w-20 bg-white/10 rounded animate-pulse" />
                <div className="h-4 w-16 bg-white/10 rounded animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileHeaderSkeleton;
