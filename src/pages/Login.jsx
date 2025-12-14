import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../utils/auth";
import Loader from "../components/Loader";
import { toast } from "react-hot-toast";
import { useLocation } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || "/dashboard";


  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      try {
        loginUser(email, password);
        toast.success("Welcome back! 🎉");
        navigate(redirectTo);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    }, 800); // UX delay
  };

  if (loading) {
    return (
      <section className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center">
        <Loader />
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gray-50 dark:bg-slate-900">
      <div className="bg-white dark:bg-slate-800 w-full max-w-md rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 dark:text-white">
          Welcome Back
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-3 border rounded-md dark:bg-slate-700 dark:text-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-3 border rounded-md dark:bg-slate-700 dark:text-white"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-3 rounded-md"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          New to LearnPro?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </section>
  );
}
