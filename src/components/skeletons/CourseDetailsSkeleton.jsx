import Skeleton from "../ui/Skeleton";

export default function CourseDetailsSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 pb-20">
      {/* Hero */}
      <div className="relative w-full h-[50vh] min-h-[400px]">
        <Skeleton className="w-full h-full rounded-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 -mt-32">
        {/* Header Card */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-10 shadow-2xl border border-gray-100 dark:border-slate-700/50 mb-10">
          <div className="space-y-4">
            <Skeleton className="h-6 w-32 rounded-full" />
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-10 w-40 ml-auto" />
          </div>
          <div className="grid grid-cols-4 gap-6 mt-10 pt-10 border-t border-gray-100 dark:border-slate-700">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <Skeleton className="w-12 h-12 rounded-2xl" />
                <div className="space-y-2">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-5 w-24" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Skeleton className="h-64 w-full rounded-3xl" />
            <Skeleton className="h-96 w-full rounded-3xl" />
          </div>
          <div className="lg:col-span-1 space-y-8">
            <Skeleton className="h-80 w-full rounded-3xl" />
            <Skeleton className="h-40 w-full rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}