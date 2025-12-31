export default function PostCardSkeleton() {
  return (
    <div className="w-full bg-[#e6c9ae] rounded-xl p-4 animate-pulse">
      
      {/* Title */}
      <div className="h-6 bg-[#F0DFCE] rounded w-3/4"></div>

      {/* Content lines */}
      <div className="mt-3 space-y-2">
        <div className="h-4 bg-[#F0DFCE] rounded w-full"></div>
        <div className="h-4 bg-[#F0DFCE] rounded w-5/6"></div>
        <div className="h-4 bg-[#F0DFCE] rounded w-2/3"></div>
      </div>

    </div>
  )
}
