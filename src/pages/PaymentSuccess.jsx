import { useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { enrollAfterPayment } from "../services/enrollment";
import { toast } from "react-hot-toast";

export default function PaymentSuccess() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const enrollUser = async () => {
      try {
        const courseId =
          params.get("courseId") ||
          localStorage.getItem("pendingCourseId");

        if (!courseId) {
          toast.error("Invalid payment session");
          navigate("/courses");
          return;
        }

        await enrollAfterPayment(courseId);
        
      localStorage.removeItem("pendingCourseId");

      toast.success("Enrolled successfully! 🎉");

      setTimeout(() => {
        navigate("/dashboard");
      }, 3000); 

    } catch (error) {
      console.error(error);
      toast.error("Enrollment check failed, but you may already be enrolled.");
      
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    }
    };

    enrollUser();
  }, [params, navigate]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow max-w-md text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          Payment Successful 🎉
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          Finalizing your enrollment...
        </p>
      </div>
    </section>
  );
}