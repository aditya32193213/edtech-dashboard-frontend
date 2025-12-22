import Skeleton from "../ui/Skeleton";

export default function InstructorDashboardSkeleton() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-slate-950 pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="space-y-3">
             <Skeleton className="h-4 w-32 rounded-md" />
             <Skeleton className="h-10 w-64 rounded-lg" />
          </div>
          <Skeleton className="h-12 w-48 rounded-xl" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           {[1, 2, 3].map((i) => (
             <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-200 dark:border-slate-800 flex items-center gap-4">
               <Skeleton className="w-12 h-12 rounded-xl shrink-0" />
               <div className="space-y-2">
                 <Skeleton className="h-3 w-24 rounded-md" />
                 <Skeleton className="h-8 w-16 rounded-md" />
               </div>
             </div>
           ))}
        </div>

        {/* Courses Grid */}
        <div className="space-y-6">
           <Skeleton className="h-8 w-40 rounded-lg" />
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden h-[340px] flex flex-col">
                   {/* Thumbnail */}
                   <Skeleton className="h-40 w-full rounded-none" />
                   
                   <div className="p-5 space-y-4 flex-1">
                      <Skeleton className="h-6 w-3/4 rounded-md" />
                      <div className="flex justify-between pt-2">
                         <Skeleton className="h-4 w-20 rounded-md" />
                         <Skeleton className="h-4 w-24 rounded-md" />
                      </div>
                   </div>
                   
                   {/* Actions */}
                   <div className="p-4 border-t border-gray-200 dark:border-slate-800 flex gap-3">
                      <Skeleton className="h-10 flex-1 rounded-lg" />
                      <Skeleton className="h-10 flex-1 rounded-lg" />
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}