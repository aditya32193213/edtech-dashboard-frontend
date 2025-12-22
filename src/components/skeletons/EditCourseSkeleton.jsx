import Skeleton from "../ui/Skeleton";

export default function EditCourseSkeleton() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-slate-950 pt-24 pb-20 px-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-8 shadow-xl">
        <Skeleton className="h-10 w-48 mb-8 rounded-lg" />

        <div className="space-y-6">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-6">
             <div className="space-y-2"><Skeleton className="h-4 w-24 rounded"/><Skeleton className="h-12 w-full rounded-xl"/></div>
             <div className="space-y-2"><Skeleton className="h-4 w-24 rounded"/><Skeleton className="h-12 w-full rounded-xl"/></div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-3 gap-6">
             <div className="space-y-2"><Skeleton className="h-4 w-24 rounded"/><Skeleton className="h-12 w-full rounded-xl"/></div>
             <div className="space-y-2"><Skeleton className="h-4 w-24 rounded"/><Skeleton className="h-12 w-full rounded-xl"/></div>
             <div className="space-y-2"><Skeleton className="h-4 w-24 rounded"/><Skeleton className="h-12 w-full rounded-xl"/></div>
          </div>

           {/* Row 3 */}
           <div className="space-y-2"><Skeleton className="h-4 w-32 rounded"/><Skeleton className="h-12 w-full rounded-xl"/></div>
           <div className="space-y-2"><Skeleton className="h-4 w-32 rounded"/><Skeleton className="h-12 w-full rounded-xl"/></div>

           {/* Textarea */}
           <div className="space-y-2"><Skeleton className="h-4 w-32 rounded"/><Skeleton className="h-32 w-full rounded-xl"/></div>

           {/* Buttons */}
           <div className="flex gap-4 pt-2">
              <Skeleton className="h-14 flex-1 rounded-xl" />
              <Skeleton className="h-14 flex-1 rounded-xl" />
           </div>
        </div>
      </div>
    </section>
  );
}