"use client";

import { motion } from "framer-motion";
import ProjectsSection from "./Projects";
import projectsData from "../data.json";
import Link from "next/link";
import Experience from "./Experience";
export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen scroll-smooth">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I am Souparna Mahato
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl text-gray-300"
        >
          Full Stack Developer from India
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#about"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition"
          >
            Know More
          </Link>

          <Link
            href="https://docs.google.com/document/d/1u-ezQgySZjg9iQc5u2XO4fdeKJwPhdTRWMpBcGPNvFA/edit?usp=drive_link" // Replace with actual path
            download
            className="px-6 py-3 border border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white rounded-xl transition"
          >
            Download Resume
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-20">
        <motion.h3
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-6"
        >
          About Me
        </motion.h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          Hey, I’m Souparna — someone who's just trying to live a meaningful
          life, stay mentally at peace, and spread a little love and
          understanding along the way. I care deeply about people, the
          environment, and the kind of world we're all creating together. I’m
          learning to move with intention — choosing purpose over pressure,
          empathy over ego. Whether it’s through writing, connecting with
          others, or quietly working on something I believe in, I want to leave
          things better than I found them. These days, I spend my time
          reflecting, writing, and slowly sharpening my skills in building
          things on the web. I enjoy learning new things, especially when it
          helps me turn ideas into something real and useful. This space is a
          little piece of me — a window into what I care about, what I’m
          learning, and where I’m headed. Thanks for being here.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-800 py-20 px-6 md:px-20">
        <motion.h3
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-6"
        >
          Skills
        </motion.h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-gray-300">
          {[
            {
              name: "HTML",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            },
            {
              name: "CSS",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            },
            {
              name: "JavaScript",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            },
            {
              name: "React",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
              name: "Next.js",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            },
            {
              name: "Redux",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
            },
            {
              name: "React Native",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
              name: "Node.js",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            },
            {
              name: "Express.js",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            },
            {
              name: "Tailwind CSS",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
            },
            {
              name: "MongoDB",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            },
            {
              name: "Git",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            },
            {
              name: "Azure",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
            },
          ].map((skill, index) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.1 }}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: index * 0.05 }}
              className="p-4 bg-gray-700 rounded-xl shadow hover:shadow-xl flex flex-col items-center"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className={`w-12 h-12 mb-2 ${
                  skill.name === "Express.js" ? "bg-white p-1 rounded" : ""
                }`}
              />
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 md:px-20">
        <motion.h3
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-6"
        >
          Education
        </motion.h3>
        <ul className="text-gray-300 space-y-4">
          <li>
            <strong>High School (WB Board)</strong> - 2019
          </li>
          <li>
            <strong>Graduation in Botany</strong> - Kanchrapara College, under
            Kalyani University (2022)
          </li>
          <li>
            <strong>Ongoing MA in Psychology</strong> - IGNOU (Expected
            Completion: Year)
          </li>
        </ul>
      </section>
      {/* Experience */}
      <section>
        <Experience />
      </section>

      {/* projects */}
      <section>
        <ProjectsSection projects={projectsData} />
      </section>

      {/* contact */}
      <section
        id="contact"
        className="bg-gray-900 text-white body-font relative py-24"
      >
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
              Contact Me
            </h1>
            <div className="flex mt-3 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-white">
              Feel free to ask anything.
            </p>
          </div>
          <form
            className="lg:w-1/2 md:w-2/3 mx-auto"
            action="https://formspree.io/f/mjvznpqo"
            method="POST"
          >
            <div className="flex flex-wrap -m-2">
              {/* Name Field */}
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-white"
                  >
                    Name
                  </label>
                  <input
                    autoComplete="off"
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-800 bg-opacity-50 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    autoComplete="off"
                    id="email"
                    name="email"
                    className="w-full bg-gray-800 bg-opacity-50 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    autoComplete="off"
                    placeholder="Your message"
                    name="message"
                    className="w-full bg-gray-800 bg-opacity-50 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-white py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg bg-black"
                >
                  Submit
                </button>
              </div>

              {/* Contact Information */}
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-700 text-center">
                <p className="text-indigo-500">souparnamahato146@gmail.com</p>
                <p className="leading-normal my-5">
                  India
                  <br />
                  Kalyani, West Bengal
                </p>
                <span className="inline-flex">
                  <p className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </p>
                  <p className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </p>
                  <p className="ml-4 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </p>
                  <p className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </p>
                </span>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Souparna Mahato. All rights reserved.
      </footer>
    </div>
  );
}
