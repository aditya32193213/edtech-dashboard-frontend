// import { useParams, Link, useNavigate } from "react-router-dom";
// import courses from "../data/courses.js";
// import { useEffect, useState } from "react";
// import { isAuthenticated, getUser } from "../utils/auth";
// import { toast } from "react-hot-toast";
// import CourseDetailsSkeleton from "../components/CourseDetailsSkeleton.jsx";

// export default function CourseDetails() {
//   const [loading, setLoading] = useState(true);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const course = courses.find((c) => c.id === id);
//   const user = getUser();

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 700);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <section className="min-h-screen bg-gray-50 dark:bg-slate-900">
//         <CourseDetailsSkeleton />
//       </section>
//     );
//   }

//   if (!course) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
//         <p className="text-gray-600 dark:text-gray-400">
//           Course not found.
//         </p>
//       </div>
//     );
//   }

//   /* 🔒 PER USER ENROLLMENT (SAFE) */
//   const enrollKey = user ? `enrolledCourses_${user.email}` : null;
//   const enrolled = enrollKey
//     ? JSON.parse(localStorage.getItem(enrollKey)) || []
//     : [];

//   const isEnrolled = enrolled.includes(course.id);

//   const handleEnroll = () => {
//     if (!isAuthenticated()) {
//       toast.error("Please login to enroll");
//       navigate("/login", {
//         state: { from: `/courses/${course.id}` },
//       });
//       return;
//     }

//     if (isEnrolled) {
//       toast("You are already enrolled");
//       return;
//     }

//     const updated = [...enrolled, course.id];
//     localStorage.setItem(enrollKey, JSON.stringify(updated));

//     toast.success("🎉 Successfully enrolled!");
//     navigate("/dashboard");
//   };

//   return (
//     <section className="bg-gray-50 min-h-screen">
//       {/* Banner */}
//       <div className="w-full h-64">
//         <img
//           src={course.image}
//           alt={course.title}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <div className="max-w-5xl mx-auto px-6 py-12">
//         {/* Back link */}
//         <Link
//           to="/courses"
//           className="text-blue-600 font-medium hover:underline"
//         >
//           ← Back to Courses
//         </Link>

//         <h1 className="text-3xl font-bold mt-4 mb-2">
//           {course.title}
//         </h1>

//         <p className="text-gray-600 mb-6">
//           Instructor: {course.instructor}
//         </p>

//         {/* Badges */}
//         <div className="flex gap-3 mb-6">
//           <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm">
//             {course.category}
//           </span>
//           <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm">
//             {course.level}
//           </span>
//           <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm">
//             {course.duration}
//           </span>
//         </div>

//         <p className="text-gray-700 mb-8">
//           This course is designed to help you gain practical skills and
//           real-world knowledge in {course.category}. You’ll work on
//           hands-on projects and learn from industry experts.
//         </p>

//         {/* Learning Outcomes */}
//         <div className="mb-8">
//           <h2 className="text-xl font-semibold mb-4">
//             What you’ll learn
//           </h2>
//           <ul className="list-disc list-inside text-gray-700 space-y-2">
//             <li>Core concepts and fundamentals</li>
//             <li>Hands-on practical projects</li>
//             <li>Industry best practices</li>
//             <li>Real-world use cases</li>
//           </ul>
//         </div>

//         {/* Enrollment */}
//         <div className="bg-white border rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <p className="text-gray-700 font-medium">
//             Enrollment Status:{" "}
//             <span className="text-green-600">Open</span>
//           </p>

//           <button
//             onClick={handleEnroll}
//             className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
//           >
//             Enroll Now
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }





import { useParams, Link, useNavigate } from "react-router-dom";
import courses from "../data/courses.js";
import { useEffect, useState } from "react";
import { isAuthenticated, getUser } from "../utils/auth";
import { toast } from "react-hot-toast";
import CourseDetailsSkeleton from "../components/CourseDetailsSkeleton.jsx";

export default function CourseDetails() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === id);
  const user = getUser();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  /* ---------- Loader ---------- */
  if (loading) {
    return (
      <section className="min-h-screen bg-gray-50 dark:bg-slate-900">
        <CourseDetailsSkeleton />
      </section>
    );
  }

  /* ---------- Not Found ---------- */
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <p className="text-gray-600 dark:text-gray-400">
          Course not found.
        </p>
      </div>
    );
  }

  /* ---------- PER USER ENROLLMENT ---------- */
  const enrollKey = user ? `enrolledCourses_${user.email}` : null;

  const enrolled = enrollKey
    ? JSON.parse(localStorage.getItem(enrollKey)) || []
    : [];

  const isEnrolled = enrolled.includes(course.id);

  /* ---------- Protected Enroll ---------- */
  const handleEnroll = () => {
    if (!isAuthenticated()) {
      toast.error("Please login to enroll");
      navigate("/login", {
        state: { from: `/courses/${course.id}` },
      });
      return;
    }

    if (isEnrolled) {
      toast("You are already enrolled");
      return;
    }

    const updated = [...enrolled, course.id];
    localStorage.setItem(enrollKey, JSON.stringify(updated));

    toast.success("🎉 Successfully enrolled!");
    navigate("/dashboard");
  };

  return (
    <section className="bg-gray-50 dark:bg-slate-900 min-h-screen transition-colors">
      {/* Banner */}
      <div className="w-full h-64">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Back link */}
        <Link
          to="/courses"
          className="text-blue-600 font-medium hover:underline"
        >
          ← Back to Courses
        </Link>

        <h1 className="text-3xl font-bold mt-4 mb-2 text-gray-900 dark:text-white">
          {course.title}
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Instructor: {course.instructor}
        </p>

        {/* Badges */}
        <div className="flex gap-3 mb-6">
          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded text-sm">
            {course.category}
          </span>
          <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded text-sm">
            {course.level}
          </span>
          <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded text-sm">
            {course.duration}
          </span>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-8">
          This course is designed to help you gain practical skills and
          real-world knowledge in {course.category}. You’ll work on
          hands-on projects and learn from industry experts.
        </p>

        {/* Learning Outcomes */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            What you’ll learn
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Core concepts and fundamentals</li>
            <li>Hands-on practical projects</li>
            <li>Industry best practices</li>
            <li>Real-world use cases</li>
          </ul>
        </div>

        {/* Enrollment */}
        <div className="bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            Enrollment Status:{" "}
            <span className="text-green-600 dark:text-green-400">
              Open
            </span>
          </p>

          <button
            onClick={handleEnroll}
            disabled={isEnrolled}
            className={`px-6 py-3 rounded-md transition text-white ${
              isEnrolled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isEnrolled ? "Already Enrolled" : "Enroll Now"}
          </button>
        </div>
      </div>
    </section>
  );
}
