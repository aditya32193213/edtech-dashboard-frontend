import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signupUser } from "../utils/auth";
import Loader from "../components/Loader";
import { toast } from "react-hot-toast";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!name || !email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      try {
        signupUser(name, email, password);
        toast.success("Account created successfully 🎉");
        navigate("/dashboard");
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    }, 800);
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
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 px-4 py-3 border rounded-md dark:bg-slate-700 dark:text-white"
        />

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
          onClick={handleSignup}
          className="w-full bg-blue-600 text-white py-3 rounded-md"
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}
