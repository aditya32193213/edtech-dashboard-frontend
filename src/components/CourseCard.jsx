export default function CourseCard({ course }) {
  return (
    <div className="h-full bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
      
      {/* Thumbnail */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 dark:text-blue-400 shadow-sm">
          {course.category}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <span className="text-xs font-semibold bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
            {course.level}
          </span>
          <span className="text-xs font-semibold text-gray-500 dark:text-gray-500 flex items-center gap-1">
             ⭐ 4.8
          </span>
        </div>

        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {course.title}
        </h3>

        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
             {course.instructor?.avatar ? (
                <img src={course.instructor.avatar} alt="avatar" className="w-full h-full object-cover" />
             ) : (
                <div className="w-full h-full flex items-center justify-center text-[10px] font-bold text-gray-500">
                   {(course.instructor?.name?.[0] || "I").toUpperCase()}
                </div>
             )}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
             {course.instructor?.name || "Expert Instructor"}
          </p>
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100 dark:border-slate-800">
          <p className="text-xl font-bold text-green-600 dark:text-green-400">
            ₹{course.price}
          </p>
          
          <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            View Details <span>→</span>
          </div>
        </div>
      </div>
    </div>
  );
}