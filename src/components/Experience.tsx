"use client";

const Experience = () => {
  return (
    <section id="experience" className="text-white body-font py-24">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
          <div className="mt-2 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col gap-8">
          {/* Experience 1 */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-[1.01] transition-all">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div>
                <h3 className="text-2xl font-semibold">Full Stack Developer</h3>
                <p className="text-indigo-400">Tech Company A</p>
                <p className="text-sm text-gray-400">Remote</p>
              </div>
              <p className="text-sm text-gray-300 mt-2 sm:mt-0">
                Jan 2023 – Present
              </p>
            </div>
            <ul className="mt-4 list-disc pl-5 text-gray-300 space-y-1">
              <li>Developed and maintained scalable web applications.</li>
              <li>Led a team of 3 developers and conducted code reviews.</li>
              <li>Boosted performance by 30% via query optimization.</li>
            </ul>
          </div>

          {/* Experience 2 */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-[1.01] transition-all">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div>
                <h3 className="text-2xl font-semibold">
                  Frontend Developer Intern
                </h3>
                <p className="text-indigo-400">Startup B</p>
                <p className="text-sm text-gray-400">Bangalore, India</p>
              </div>
              <p className="text-sm text-gray-300 mt-2 sm:mt-0">
                Jul 2022 – Dec 2022
              </p>
            </div>
            <ul className="mt-4 list-disc pl-5 text-gray-300 space-y-1">
              <li>Built reusable React components and design systems.</li>
              <li>Worked closely with backend developers to integrate APIs.</li>
              <li>Delivered responsive, mobile-first UIs under deadlines.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
