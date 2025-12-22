import { useNavigate } from "react-router-dom";

export default function PaymentCancel() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow max-w-md text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Payment Cancelled ❌
        </h1>

        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Your payment was not completed.
          <br />
          You can try again anytime.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition"
          >
            Go Back
          </button>

          <button
            onClick={() => navigate("/courses")}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
          >
            Browse Courses
          </button>
        </div>
      </div>
    </section>
  );
}
