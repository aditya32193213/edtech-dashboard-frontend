import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
      {/* Course Image */}
      <img
        src={course.image}
        alt={course.title}
        className="h-48 w-full object-cover"
      />

      {/* Course Info */}
      <div className="p-5">
        <div className="flex gap-2 mb-2">
          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
            {course.category}
          </span>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {course.level}
          </span>
        </div>

        <h3 className="text-lg font-semibold mb-2">
          {course.title}
        </h3>

        <p className="text-sm text-gray-500 mb-4">
          Instructor: {course.instructor}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            ⏱ {course.duration}
          </span>

          <Link
            to={`/courses/${course.id}`}
            className="text-blue-600 font-medium hover:underline"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
