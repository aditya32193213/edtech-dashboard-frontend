import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900/10 dark:to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest">
            🚀 Our Story
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Empowering the Next Generation of <span className="text-blue-600 dark:text-blue-400">Tech Leaders</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            LearnPro is a modern EdTech platform designed to bridge the gap between traditional education and industry expectations. We build practical, job-ready skills.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                  We aim to democratize high-quality education by making it accessible, affordable, and outcome-driven. We believe that everyone deserves the opportunity to learn from the best and build a career they love.
                </p>
              </div>
              <div className="flex-shrink-0 bg-blue-50 dark:bg-slate-800 p-6 rounded-2xl border border-blue-100 dark:border-slate-700 text-center min-w-[200px]">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1">50k+</div>
                <div className="text-sm font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wide">Learners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900 border-y border-gray-100 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How LearnPro Works
            </h2>
            <p className="text-gray-600 dark:text-slate-400">
              Your journey from beginner to expert in 4 simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon="🔍" 
              title="Browse" 
              desc="Explore our vast catalog of expert-led courses across tech & business." 
            />
            <FeatureCard 
              icon="⚡" 
              title="Enroll" 
              desc="Get instant access to high-quality video lessons and resources." 
            />
            <FeatureCard 
              icon="💻" 
              title="Learn" 
              desc="Build real-world projects with hands-on coding environments." 
            />
            <FeatureCard 
              icon="📈" 
              title="Succeed" 
              desc="Track your progress, earn certificates, and land your dream job." 
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Who Is This For?
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 mb-10">
            Whether you are a <strong className="text-blue-600 dark:text-blue-400">student</strong> looking to build a foundation, a <strong className="text-blue-600 dark:text-blue-400">professional</strong> aiming to upskill, or a <strong className="text-blue-600 dark:text-blue-400">career switcher</strong> ready for a new challenge, LearnPro is built for you.
          </p>
          
          <Link 
            to="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Start Learning Now 
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-gray-50 dark:bg-slate-800 p-8 rounded-2xl text-center hover:bg-white dark:hover:bg-slate-700 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 dark:hover:border-slate-600 group">
      <div className="text-4xl mb-6 bg-white dark:bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-sm group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}