"use client";

import { useParams } from "next/navigation";
import projects from "../../data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-white text-center mt-20 text-xl">
        🚫 Project not found
      </div>
    );
  }

  return (
    <>
      <div className="max-w-5xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="text-4xl font-bold text-indigo-400 mb-4">
          {project.title}
        </h1>

        {/* Image Carousel */}
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="rounded-xl overflow-hidden mb-8"
        >
          {project.images.map((img: string, index: number) => (
            <SwiperSlide key={index}>
              <Image
                alt={`Screenshot ${index + 1}`}
                // className="w-full h-80 object-cover rounded-xl"
                width={1280}
                height={720}
                className="w-full h-80 object-cover rounded-xl"
                src={`${img}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Description */}
        <p className="text-gray-900 text-lg mb-6">{project.description}</p>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mb-8">
          <a
            href={project.url}
            target="_blank"
            className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-xl text-white"
          >
            🌐 Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-xl text-white"
          >
            💻 GitHub
          </a>
        </div>

        {/* Learnings */}
        <div className="mb-6">
          <h2
            className="text-2xl font-semibold text-green-950
         mb-2"
          >
            🧠 What I Learned
          </h2>
          <ul className="list-disc list-inside text-black space-y-1">
            {project.learned.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-red-700">
            🚧 Challenges I Faced
          </h2>
          <ul className="list-disc list-inside text-blue-700 space-y-1">
            {project.challenges.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Souparna Mahato. All rights reserved.
      </footer>
    </>
  );
};

export default ProjectDetail;
