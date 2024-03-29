"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Boards",
    description:
      "A Story Boarding web app that allows the user to jot their ideas and collaborate with other people.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Pagla-Dasu/Boards",
    previewUrl: "https://boards-pagladasu.vercel.app/",
  },
  {
    id: 2,
    title: "WatchTower",
    description: "A web app to make sure no one trespasses your private space.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Pagla-Dasu/Boards",
    previewUrl: "https://baywatch.vercel.app/",
  },
  {
    id: 7,
    title: "Responsive Dashboard",
    description:
      "A responsive dashboard completely made with basic HTML and CSS ans used some JS.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Pagla-Dasu/ResponsiveStaticDashboard",
    previewUrl: "https://responsive-static-dashboard.vercel.app",
  },
  {
    id: 3,
    title: "Netflix Clone",
    description:
      "A Responsive Netflix Clone with personal login and signup page, a home page for the movies and trailers to watch. Made with TypeSript, Next.js, TailwindCSS, Redux, Firebase, and many more technologies.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Pagla-Dasu/Netflix-Clone",
    previewUrl: "https://netflix-clone-pagla-dasu.vercel.app",
  },
  {
    id: 4,
    title: "Disney+ Clone",
    description:
      "This is a clone of the famous hotstar app with google authentication, firebase and an responsive UI.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Pagla-Dasu/DISNEY-CLONE",
    previewUrl: "https://disney-clone-pagladasu.vercel.app/",
  },
  {
    id: 6,
    title: "Tesla Clone",
    description:
      "A responsive clone website of Tesla's original website, to showcase basic reactJs skills.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Pagla-Dasu/Tesla-Clone",
    previewUrl: "https://tesla-clone-pagladasu.vercel.app/",
  },
  {
    id: 5,
    title: "Google Clone",
    description:
      "A Google Clone with google search API and with pagination effect.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Pagla-Dasu/google-clone",
    previewUrl: "https://google-clone-pagla-dasu.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClink={handleTagChange}
          name={"All"}
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClink={handleTagChange}
          name={"Web"}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClink={handleTagChange}
          name={"Mobile"}
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
