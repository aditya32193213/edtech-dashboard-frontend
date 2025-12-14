import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import coursesData from "../data/courses";
import CourseCard from "../components/CourseCard";
import Loader from "../components/Loader";

export default function Courses() {
  const [params, setParams] = useSearchParams();
  const searchFromURL = params.get("search") || "";

  const [search, setSearch] = useState(searchFromURL);
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [duration, setDuration] = useState("All");
  const [sort, setSort] = useState("default");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (search) setParams({ search });
    else setParams({});
  }, [search, setParams]);

  const filteredCourses = [...coursesData]
    .filter((course) => {
      return (
        (course.title.toLowerCase().includes(search.toLowerCase()) ||
          course.instructor.toLowerCase().includes(search.toLowerCase())) &&
        (category === "All" || course.category === category) &&
        (level === "All" || course.level === level) &&
        (duration === "All" || course.duration === duration)
      );
    })
    .sort((a, b) =>
      sort === "title" ? a.title.localeCompare(b.title) : 0
    );

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          All Courses
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Browse our complete catalog and find your next learning adventure
        </p>

        {/* Filters */}
        <div className="grid gap-4 md:grid-cols-5 mb-10">
          <input
            type="text"
            placeholder="Search by course or instructor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              px-4 py-3 border rounded-md
              bg-white dark:bg-slate-800
              text-gray-900 dark:text-white
              border-gray-300 dark:border-gray-600
            "
          />

          {[
            {
              value: category,
              set: setCategory,
              options: ["All", "Web Development", "Data Science", "Artificial Intelligence"],
            },
            {
              value: level,
              set: setLevel,
              options: ["All", "Beginner", "Intermediate", "Advanced"],
            },
            {
              value: duration,
              set: setDuration,
              options: ["All", "10 Weeks", "12 Weeks", "14 Weeks"],
            },
            {
              value: sort,
              set: setSort,
              options: ["default", "title"],
            },
          ].map((item, i) => (
            <select
              key={i}
              value={item.value}
              onChange={(e) => item.set(e.target.value)}
              className="
                px-4 py-3 border rounded-md
                bg-white dark:bg-slate-800
                text-gray-900 dark:text-white
                border-gray-300 dark:border-gray-600
              "
            >
              {item.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt === "default" ? "Most Popular" : opt}
                </option>
              ))}
            </select>
          ))}
        </div>

        {/* Loader / Grid */}
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader />
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.length ? (
              filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <p className="text-gray-500 dark:text-gray-400 col-span-full text-center">
                No courses found.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

