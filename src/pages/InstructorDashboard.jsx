import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchMyCourses, deleteCourse } from "../services/courseApi";
import { getUser } from "../utils/auth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import InstructorDashboardSkeleton from "../components/skeletons/InstructorDashboardSkeleton";

export default function InstructorDashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const user = getUser();

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const data = await fetchMyCourses();
      setCourses(data || []);
    } catch (error) {
      console.error("Failed to load instructor courses", error);
    } finally {
      setLoading(false);
    }
  }

 
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;
    
    try {
      await deleteCourse(id);
      toast.success("Course deleted successfully");
      // Refresh list
      loadData(); 
    } catch (error) {
      toast.error("Failed to delete course");
    }
  };

  if (loading) {
    return <InstructorDashboardSkeleton />;
  }

  const totalStudents = courses.reduce((acc, c) => acc + (c.enrolledStudents?.length || 0), 0);
  const totalEarnings = courses.reduce((acc, c) => acc + ((c.enrolledStudents?.length || 0) * c.price), 0);

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-white pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <span className="text-purple-600 dark:text-purple-400 font-bold tracking-wider text-xs uppercase">Instructor Panel</span>
            <h1 className="text-4xl font-bold mt-2">Welcome, {user?.name} 👋</h1>
          </div>
          <Link to="/add-course" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-bold transition flex items-center gap-2 shadow-lg shadow-purple-500/30">
            <span>+</span> Create New Course
          </Link>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard title="Total Courses" value={courses.length} icon="📚" color="bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400" />
          <StatCard title="Total Students" value={totalStudents} icon="👥" color="bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400" />
          <StatCard title="Total Earnings" value={`₹${totalEarnings.toLocaleString()}`} icon="💰" color="bg-yellow-100 text-yellow-600 dark:bg-yellow-500/10 dark:text-yellow-400" />
        </div>

        {/* COURSE LIST */}
        <h2 className="text-2xl font-bold mb-6">Your Courses</h2>
        {courses.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-slate-800">
            <p className="text-gray-500 dark:text-slate-500 mb-4">You haven't created any courses yet.</p>
            <Link to="/add-course" className="text-purple-600 dark:text-purple-400 font-bold hover:underline">Create your first course →</Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map(course => (
              <div key={course._id} className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all group flex flex-col">
                <div className="h-40 bg-gray-200 dark:bg-slate-800 relative overflow-hidden">
                  <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded text-xs font-bold text-white backdrop-blur-sm">
                    ₹{course.price}
                  </div>
                </div>
                
                <div className="p-5 flex-grow">
                  <h3 className="font-bold text-lg mb-2 line-clamp-1">{course.title}</h3>
                  <div className="flex justify-between text-sm text-gray-500 dark:text-slate-400 mt-4 pt-4 border-t border-gray-100 dark:border-slate-800">
                    <span>{course.enrolledStudents?.length || 0} Students</span>
                    <span className="font-medium text-purple-600 dark:text-purple-400">{course.category}</span>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-slate-800/50 border-t border-gray-200 dark:border-slate-800 flex gap-3">
                  <button 
                    onClick={() => handleDelete(course._id)}
                    className="flex-1 px-3 py-2 text-sm font-bold text-red-600 bg-red-100 dark:bg-red-900/20 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/40 transition"
                  >
                    Delete
                  </button>
                   <button 
                     onClick={() => navigate(`/edit-course/${course._id}`)}
                      className="flex-1 px-3 py-2 text-sm font-bold text-blue-600 bg-blue-100 dark:bg-blue-900/20 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/40 transition"
                     >
            Edit
          </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 p-6 rounded-2xl flex items-center gap-4 shadow-sm">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${color}`}>{icon}</div>
      <div>
        <p className="text-gray-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wide">{title}</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
      </div>
    </div>
  );
}