export default function CourseDetailsSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="w-full h-64 bg-gray-300 dark:bg-slate-700"></div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-6">
        <div className="h-5 w-32 bg-gray-300 dark:bg-slate-700 rounded"></div>

        <div className="h-8 w-2/3 bg-gray-300 dark:bg-slate-700 rounded"></div>
        <div className="h-4 w-1/3 bg-gray-300 dark:bg-slate-700 rounded"></div>

        <div className="flex gap-3">
          <div className="h-6 w-24 bg-gray-300 dark:bg-slate-700 rounded"></div>
          <div className="h-6 w-24 bg-gray-300 dark:bg-slate-700 rounded"></div>
          <div className="h-6 w-24 bg-gray-300 dark:bg-slate-700 rounded"></div>
        </div>

        <div className="space-y-3">
          <div className="h-4 bg-gray-300 dark:bg-slate-700 rounded"></div>
          <div className="h-4 bg-gray-300 dark:bg-slate-700 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-300 dark:bg-slate-700 rounded"></div>
        </div>

        <div className="h-20 bg-gray-300 dark:bg-slate-700 rounded"></div>
      </div>
    </div>
  );
}
