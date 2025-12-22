import { extractYouTubeVideoId } from "../utils/youtube";
import { updateProgress } from "../services/progress";
import { toast } from "react-hot-toast";

export default function CourseVideo({ videoUrl, courseId, isStudent }) { 
  const videoId = extractYouTubeVideoId(videoUrl);

  if (!videoId) {
    return <p className="text-gray-500">No preview video available.</p>;
  }

  const handleProgressUpdate = async () => {
    try {
      await updateProgress(courseId, 25);
      toast.success("Progress updated");
    } catch (err) {
      toast.error("Failed to update progress");
    }
  };

  return (
    <div className="space-y-4">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Course Preview"
        className="w-full aspect-video rounded-xl border border-gray-200 dark:border-slate-700"
        allowFullScreen
      />

      {isStudent && (
        <button
          onClick={handleProgressUpdate}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Mark as Watched
        </button>
      )}
    </div>
  );
}