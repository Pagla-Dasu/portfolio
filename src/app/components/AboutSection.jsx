"use client";
import Image from "next/image";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Chandigarh University</li>
        <li>Salt Lake Point School</li>
        <li>St. Mary&apos;s Orphanage and Day School</li>
      </ul>
    ),
  },
  {
    title: "certificates",
    id: "certificates",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Certificate</li>
        <li>JavaScript</li>
        <li>Python Certificate</li>
        <li>100x Cohort 2.0 (Ongoing)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [ispending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about.jpg"
          alt="about-img"
          width={250}
          height={250}
          className="place-self-center rounded-3xl"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a freelancer/Full Stack Developer who is passionate about
            seamless interface building for best user optimisation. Apart from
            being a developing workaholic, I am equally passionate about
            photography, videography, cinematography, photo editing with an
            added interest in music and learning instruments. Theatre, cinematic
            media and decoding Marvel - sequences are where the heart lies,
            including tinkering with languages, culture and media.
          </p>
          <div className="flex flex-row justify-start mt-8 ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certificates")}
              active={tab === "certificates"}
            >
              {" "}
              Certificates{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
