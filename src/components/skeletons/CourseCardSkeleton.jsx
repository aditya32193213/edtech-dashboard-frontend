import Skeleton from "../ui/Skeleton";

export default function CourseCardSkeleton() {
  return (
    <div className="h-full border border-gray-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm flex flex-col">
      {/* Thumbnail */}
      <Skeleton className="h-48 w-full rounded-none" />
      
      <div className="p-6 flex flex-col flex-grow space-y-4">
        {/* Badges */}
        <div className="flex justify-between">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-12 rounded-full" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-3/4" />
        </div>

        {/* Price & Button */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100 dark:border-slate-800">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-5 w-24" />
        </div>
      </div>
    </div>
  );
}