import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import courses from "../data/courses";
import CourseCard from "../components/CourseCard";

export default function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const carouselRef = useRef(null);

  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim()) {
      navigate(`/courses?search=${encodeURIComponent(search)}`);
    }
  };
    // Auto-scroll testimonials
  useEffect(() => {
    const el = carouselRef.current;
    const interval = setInterval(() => {
      if (!el) return;
      el.scrollLeft += 1;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
        el.scrollLeft = 0;
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="bg-white dark:bg-slate-900 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          Start Learning with <span className="text-blue-600">LearnPro</span>
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Unlock your potential with expert-led courses
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link to="/courses" className="bg-blue-600 text-white px-6 py-3 rounded-md">
            🚀 Explore Courses
          </Link>
          <Link to="/about" className="border px-6 py-3 rounded-md text-gray-700 dark:text-gray-300 dark:border-gray-600">
            📘 How It Works
          </Link>
        </div>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearch}
          placeholder="Search for courses..."
          className="mt-8 w-full max-w-xl px-4 py-3 rounded-md border dark:bg-gray-800 dark:text-white"
        />
      </section>

      {/* PLATFORM METRICS */}
      <section className="bg-white dark:bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <Metric icon="👨‍🎓" value="50,000+" label="Active Learners" />
          <Metric icon="📚" value="200+" label="Expert Courses" />
          <Metric icon="🏆" value="95%" label="Success Rate" />
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="bg-white dark:bg-slate-900 py-20">
        <h2 className="text-4xl font-bold text-center dark:text-white mb-10">
          Featured Courses
        </h2>

        <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto px-6">
          {courses.slice(0, 3).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
       {/* TESTIMONIALS (FIXED ALIGNMENT) */}
      <section className="bg-gray-100 dark:bg-slate-800 py-20">
        <h2 className="text-4xl font-bold text-center dark:text-white mb-10">
          What Our Learners Say
        </h2>

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-hidden max-w-7xl mx-auto px-6"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[320px] bg-white dark:bg-slate-900 p-6 rounded-lg shadow"
            >
              <p className="text-gray-600 dark:text-gray-300">“{t.text}”</p>
              <p className="mt-3 font-semibold dark:text-white">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPANY LOGOS */}
      <section className="bg-white dark:bg-slate-900 py-16">
        <h2 className="text-3xl font-bold text-center dark:text-white mb-10">
          Trusted by Learners from Top Companies
        </h2>

        <div className="flex justify-center gap-12 flex-wrap items-center">
          <Logo src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" />
          <Logo src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" />
          <Logo src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" />
          <Logo src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" />
          <Logo src="https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" />
        </div>
      </section>
    </>
  );
}

function Metric({ icon, value, label }) {
  return (
    <div className="p-6 rounded-lg bg-gray-50 dark:bg-slate-800 hover:scale-105 transition">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-3xl font-bold dark:text-white">{value}</h3>
      <p className="text-gray-600 dark:text-gray-400">{label}</p>
    </div>
  );
}

function Logo({ src }) {
  return <img src={src} alt="this is an logo" className="h-8 opacity-80 hover:opacity-100 transition" />;
}

const testimonials = [
  { name: "Alex Johnson", role: "Frontend Dev", text: "Hands-on projects helped me transition into tech." },
  { name: "Priya Sharma", role: "Data Analyst", text: "Courses are very well structured and practical." },
  { name: "Rahul Verma", role: "AI Engineer", text: "One of the best learning platforms I’ve used." }
];
