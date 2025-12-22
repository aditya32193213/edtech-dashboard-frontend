import Skeleton from "../ui/Skeleton";

export default function AuthSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gray-50 dark:bg-slate-900">
      <div className="bg-white dark:bg-slate-800 w-full max-w-md rounded-xl shadow-lg p-8 space-y-6">
        <Skeleton className="h-10 w-1/2 mx-auto mb-6" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full rounded-md mt-6" />
        <Skeleton className="h-4 w-2/3 mx-auto" />
      </div>
    </div>
  );
}