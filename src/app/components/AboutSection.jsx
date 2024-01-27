"use client";
import React, { useTransition, useState, useRef, HTMLDivElement } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, useTransform, useScroll } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python (Advanced)</li>
        <li>PyTorch (Intermediate)</li>
        <li>Tensorflow (Intermediate)</li>
        <li>Pandas (Advanced)</li>
        <li>Numpy (Advanced)</li>
        <li>JavaScript (Intermediate)</li>
        <li>React (Intermediate)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.Eng. in Computer Science <br/>(CN Yang Scholarship)
          <br/>Nanyang Technological University, Singapore</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Google Professional ML Engineer (In Progress)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const aboutref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: aboutref,
    // offset: ["0 1", "0.7 0.8"]
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1.7])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1.6])

  return (
    <motion.div
      ref = {aboutref.current}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
    >

    <section id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-30 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
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
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
              >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8 flex flex-row justify-start">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
    </motion.div>
  );
};

export default AboutSection;
