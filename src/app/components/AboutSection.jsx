"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

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

  return (
    <section className="items-center justify-center py-18 snap-center" id="about">
      <div className=" md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16 py-30 px-4 m-16   overflow-y-auto">
        <div className="md:flex md:items-center md:justify-center h-fit">
          <Image className="" src="/images/two_cats.png" width={475} height={475} alt="Two pet cats" />

        </div>
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
  );
};

export default AboutSection;
