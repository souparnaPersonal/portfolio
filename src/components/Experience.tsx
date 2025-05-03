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
                <p className="text-indigo-400">Nomatic Techworks</p>
                <p className="text-sm text-gray-400">Remote</p>
              </div>
              <p className="text-sm text-gray-300 mt-2 sm:mt-0">
                Jan 2023 – December 2023
              </p>
            </div>
            <ul className="mt-4 list-disc pl-5 text-gray-300 space-y-1">
              <li>Developed and maintained scalable web applications.</li>
              <li>Led a team of 3 developers and conducted code reviews.</li>
              <li>Boosted performance by 30% via query optimization.</li>
              <li>
                Worked as a Full Stack Intern at Nomatic Techworks for ~11
                months, contributing to the development of a board game demo
                site called <strong>Stock Shock</strong>.
              </li>
              <li>
                Designed interactive gameplay screens and implemented responsive
                layouts using Material UI.
              </li>
              <li>
                Gained hands-on experience with Microsoft Azure for deployment
                and configuration tasks.
              </li>
              <li>
                Explored React Native by making updates and minor changes in the
                mobile app <strong>BookFish</strong>.
              </li>
            </ul>
          </div>

          {/* Experience 2 */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-[1.01] transition-all">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div>
                <h3 className="text-2xl font-semibold">
                  React Native Developer
                </h3>
                <p className="text-indigo-400">Arptix</p>
                <p className="text-sm text-gray-400">Remote</p>
              </div>
              <p className="text-sm text-gray-300 mt-2 sm:mt-0">
                Jan 2024 – Present
              </p>
            </div>
            <ul className="mt-4 list-disc pl-5 text-gray-300 space-y-1">
              <li>
                Working full-time on a React Native mobile app for the real
                estate sector.
              </li>
              <li>
                Implemented features for property buying, selling, and rental
                listings.
              </li>
              <li>
                Closely collaborated with designers and backend developers to
                build and refine UI/UX.
              </li>
              <li>
                Involved in integrating new business flows and improving app
                architecture.
              </li>
              <li>
                Enhanced and refactored existing screens for performance and
                responsiveness.
              </li>
              <li>
                Gained solid hands-on experience across frontend and backend
                development.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
