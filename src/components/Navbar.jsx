import { Link, useNavigate } from "react-router-dom";
import { getUser, logoutUser } from "../utils/auth.js";

export default function Navbar({ darkMode, setDarkMode }) {
  const user = getUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <nav className="w-full border-b bg-white dark:bg-slate-900 dark:border-slate-700 transition">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          LearnPro
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-gray-600 dark:text-gray-300">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          {user && <Link to="/dashboard">Dashboard</Link>}
          {user && <Link to="/profile">Profile</Link>}
          <Link to="/about">About</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 rounded-md bg-gray-200 dark:bg-slate-700 dark:text-white"
          >
            {darkMode ? "🌞 Light" : "🌙 Dark"}
          </button>

          {!user ? (
            <>
              <Link to="/login" className="text-gray-600 dark:text-gray-300">
                Sign In
              </Link>
              <Link
                to="/courses"
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Get Started
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={handleLogout}
                className="text-red-600 font-medium"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

