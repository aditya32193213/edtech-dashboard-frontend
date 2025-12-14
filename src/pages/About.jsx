export default function About() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          About LearnPro
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          LearnPro is a modern EdTech platform designed to help learners build
          practical, job-ready skills through expert-led courses. We focus on
          hands-on learning, real-world projects, and structured learning paths
          across technology, data, and business domains.
        </p>

        {/* Mission */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Our mission is to make high-quality education accessible and
            outcome-driven. We aim to bridge the gap between traditional
            education and industry expectations.
          </p>
        </div>

        {/* How it works */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            How LearnPro Works
          </h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300 list-disc list-inside">
            <li>Browse courses based on your interests and skill level</li>
            <li>Enroll and learn at your own pace</li>
            <li>Gain practical knowledge through structured content</li>
            <li>Track your learning progress in your dashboard</li>
          </ul>
        </div>

        {/* Audience */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
            Who Is It For?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            LearnPro is ideal for students, working professionals, and career
            switchers who want to upskill, reskill, or explore new career
            opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
