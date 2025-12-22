import Skeleton from "../ui/Skeleton";

export default function DashboardSkeleton() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-slate-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="space-y-3 w-full md:w-1/2">
            <Skeleton className="h-6 w-32 rounded-full" />
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
          </div>
          <div className="hidden md:flex flex-col items-end gap-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-8 w-40" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-slate-800 flex items-center gap-5">
              <Skeleton className="w-14 h-14 rounded-2xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-8 w-16" />
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Courses List */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-slate-800 space-y-6">
              <div className="flex justify-between items-center">
                <Skeleton className="h-8 w-48" />
                <Skeleton className="h-5 w-32" />
              </div>
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-5 p-4 rounded-2xl border border-gray-100 dark:border-slate-800">
                  <Skeleton className="w-24 h-24 rounded-xl shrink-0" />
                  <div className="flex-1 space-y-3 py-1">
                    <div className="flex justify-between">
                      <Skeleton className="h-6 w-1/2" />
                      <Skeleton className="h-6 w-10" />
                    </div>
                    <Skeleton className="h-3 w-full rounded-full" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Widgets */}
          <div className="space-y-8">
            <Skeleton className="h-64 w-full rounded-3xl" />
            <Skeleton className="h-64 w-full rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}