import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { createCourse } from "../services/courseApi";

export default function AddCourse() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "", description: "", price: "", category: "Web Development",
    level: "Beginner", duration: "", videoUrl: "", thumbnail: ""
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createCourse(formData);
      toast.success("Course Created Successfully! 🎉");
      navigate("/dashboard/instructor");
    } catch (error) {
      toast.error("Failed to create course");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-white pt-24 pb-20 px-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold mb-8">Create New Course 🎬</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input label="Course Title" name="title" value={formData.title} onChange={handleChange} placeholder="e.g. Master React JS" />
            <Input label="Category" name="category" value={formData.category} onChange={handleChange} placeholder="e.g. Web Dev" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Input label="Price (₹)" name="price" type="number" value={formData.price} onChange={handleChange} placeholder="999" />
            <Input label="Duration" name="duration" value={formData.duration} onChange={handleChange} placeholder="e.g. 10 Weeks" />
            <div>
              <label htmlFor="level" className="block text-sm font-semibold text-gray-500 dark:text-slate-400 mb-2">Level</label>
              <select 
                name="level" 
                id="level" 
                value={formData.level} 
                onChange={handleChange} 
                className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-3 outline-none focus:border-purple-500 transition-colors"
              >
                <option>Beginner</option><option>Intermediate</option><option>Advanced</option>
              </select>
            </div>
          </div>

          <Input label="Thumbnail URL" name="thumbnail" value={formData.thumbnail} onChange={handleChange} placeholder="https://..." />
          <Input label="Video URL (Demo)" name="videoUrl" value={formData.videoUrl} onChange={handleChange} placeholder="https://youtube.com/..." />
          
          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-gray-500 dark:text-slate-400 mb-2">Description</label>
            <textarea 
              name="description" 
              id="description" 
              rows="4" 
              value={formData.description} 
              onChange={handleChange} 
              className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-3 outline-none focus:border-purple-500 transition-colors" 
              placeholder="What will students learn?" 
            />
          </div>

          <button disabled={loading} className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-bold text-lg transition shadow-lg shadow-purple-500/20 disabled:opacity-50">
            {loading ? "Publishing..." : "Publish Course"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Input({ label, name, ...props }) {
  const id = props.id || name; 
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-500 dark:text-slate-400 mb-2">{label}</label>
      <input 
        id={id} 
        name={name} 
        {...props} 
        className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-3 outline-none focus:border-purple-500 transition-colors" 
      />
    </div>
  );
}