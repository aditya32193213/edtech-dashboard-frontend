import { useState, useEffect } from "react";
import { getUser, logoutUser, updateProfile } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function Profile() {
  const navigate = useNavigate();
  const user = getUser();

  const [name, setName] = useState(user?.name || "");
  const [saving, setSaving] = useState(false);

  /* 🔐 Redirect if not logged in */
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return null;

  /* 💾 Save profile */
  const handleSave = () => {
    if (!name.trim()) {
      toast.error("Name cannot be empty");
      return;
    }

    setSaving(true);
    updateProfile({ name });

    setTimeout(() => {
      setSaving(false);
      toast.success("Profile updated successfully");
    }, 500);
  };

  /* 🚪 Logout */
  const handleLogout = () => {
    logoutUser();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          My Profile
        </h1>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-8 space-y-6">
          {/* Avatar */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
              {name.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {user.email}
              </p>
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                w-full px-4 py-3 border rounded-md
                bg-white dark:bg-slate-700
                text-gray-900 dark:text-white
                border-gray-300 dark:border-gray-600
                focus:ring-2 focus:ring-blue-500
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-300">
              Email (read-only)
            </label>
            <input
              type="email"
              value={user.email}
              disabled
              className="
                w-full px-4 py-3 border rounded-md
                bg-gray-100 dark:bg-slate-600
                text-gray-600 dark:text-gray-300
                cursor-not-allowed
              "
            />
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={handleSave}
              disabled={saving}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>

            <button
              onClick={handleLogout}
              className="border border-red-500 text-red-600 px-6 py-3 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
