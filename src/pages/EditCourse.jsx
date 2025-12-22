import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { fetchCourseById, updateCourse } from "../services/courseApi";
import EditCourseSkeleton from "../components/skeletons/EditCourseSkeleton";

export default function EditCourse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "", description: "", price: "", category: "",
    level: "", duration: "", videoUrl: "", thumbnail: ""
  });

  useEffect(() => {
    async function loadCourse() {
      try {
        const data = await fetchCourseById(id);
        setFormData({
            title: data.title,
            description: data.description,
            price: data.price,
            category: data.category,
            level: data.level,
            duration: data.duration,
            videoUrl: data.videoUrl,
            thumbnail: data.thumbnail
        });
      } catch (error) {
        toast.error("Failed to load course details");
        navigate("/dashboard/instructor");
      } finally {
        setLoading(false);
      }
    }
    loadCourse();
  }, [id, navigate]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await updateCourse(id, formData);
      toast.success("Course Updated Successfully! ✅");
      navigate("/dashboard/instructor");
    } catch (error) {
      toast.error("Failed to update course");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <EditCourseSkeleton />;
  }

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-white pt-24 pb-20 px-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold mb-8">Edit Course ✏️</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input label="Course Title" name="title" value={formData.title} onChange={handleChange} />
            <Input label="Category" name="category" value={formData.category} onChange={handleChange} />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Input label="Price (₹)" name="price" type="number" value={formData.price} onChange={handleChange} />
            <Input label="Duration" name="duration" value={formData.duration} onChange={handleChange} />
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

          <Input label="Thumbnail URL" name="thumbnail" value={formData.thumbnail} onChange={handleChange} />
          <Input label="Video URL (Demo)" name="videoUrl" value={formData.videoUrl} onChange={handleChange} />
          
          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-gray-500 dark:text-slate-400 mb-2">Description</label>
            <textarea 
              name="description" 
              id="description" 
              rows="4" 
              value={formData.description} 
              onChange={handleChange} 
              className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-3 outline-none focus:border-purple-500 transition-colors" 
            />
          </div>

          <div className="flex gap-4">
             <button type="button" onClick={() => navigate("/dashboard/instructor")} className="flex-1 py-4 rounded-xl font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition">
               Cancel
             </button>
             <button disabled={saving} className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-bold text-lg transition shadow-lg shadow-purple-500/20 disabled:opacity-50">
               {saving ? "Saving..." : "Save Changes"}
             </button>
          </div>
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