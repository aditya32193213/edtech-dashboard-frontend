import courses from "../data/courses";
import { getUser } from "../utils/auth.js";
import { useEffect, useState } from "react";
import Loader from "../components/Loader.jsx";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const user = getUser();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center">
        <Loader />
      </section>
    );
  }

  /* 🔒 MIGRATION FIX (OLD USERS SAFE) */
  const legacy = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
  const enrollKey = user ? `enrolledCourses_${user.email}` : null;

  if (user && legacy.length && !localStorage.getItem(enrollKey)) {
    localStorage.setItem(enrollKey, JSON.stringify(legacy));
    localStorage.removeItem("enrolledCourses");
  }

  const enrolledIds = enrollKey
    ? JSON.parse(localStorage.getItem(enrollKey)) || []
    : [];

  const enrolledCourses = courses.filter((c) =>
    enrolledIds.includes(c.id)
  );

  /* PER USER PROGRESS */
  const progressKey = `courseProgress_${user.email}`;
  const progressData =
    JSON.parse(localStorage.getItem(progressKey)) || {};

  const getProgress = (courseId) => {
    if (!progressData[courseId]) {
      progressData[courseId] = Math.floor(Math.random() * 60) + 20;
      localStorage.setItem(progressKey, JSON.stringify(progressData));
    }
    return progressData[courseId];
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
          Welcome back,{" "}
          <span className="text-blue-600">
            {user?.name || "Learner"}
          </span>
          !
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Continue your learning journey and achieve your goals
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          <StatCard title="Enrolled Courses" value={enrolledCourses.length} />
          <StatCard title="Learning Hours" value="47" />
          <StatCard title="Certificates" value="2" />
          <StatCard title="This Week" value="12h" />
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                My Courses
              </h2>
              <button className="text-sm text-blue-600 hover:underline">
                View All
              </button>
            </div>

            {enrolledCourses.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">
                You haven’t enrolled in any courses yet.
              </p>
            ) : (
              <div className="space-y-6">
                {enrolledCourses.map((course) => {
                  const progress = getProgress(course.id);

                  return (
                    <div key={course.id} className="flex gap-4 items-center">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-20 h-20 object-cover rounded-md"
                      />

                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {course.title}
                          </h3>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {progress}%
                          </span>
                        </div>

                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 text-center">
            <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Learning Streak
            </h2>
            <p className="text-6xl font-bold text-blue-600 mb-2">7</p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              days in a row
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Keep it up! You’re building a great learning habit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stat Card ---------- */
function StatCard({ title, value }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 flex justify-between items-center">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
          {title}
        </p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
          {value}
        </p>
      </div>
      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 font-bold">
        ⬤
      </div>
    </div>
  );
}
