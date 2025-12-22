export default function Skeleton({ className, ...props }) {
  return (
    <div
      className={`animate-pulse bg-gray-200 dark:bg-slate-800 rounded-md ${className}`}
      {...props}
    />
  );
}