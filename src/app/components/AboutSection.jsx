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
        <li>B.Eng. in Computer Science (CN Yang Scholarship)
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
  {
    title: "Leadership",
    id: "leadership",
    content: (
      <ul className="list-disc pl-2">
        <li>Ultimate Frisbee Captain <br/>NTU Crescent Hall 2020 - 2022</li>
        <li>Hall Council Sports Director <br/>NTU Crescent Hall 2020 - 2021</li>
        <li>Head Programmer <br/>CN Yang Orientation 2020 - 2021</li>
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
    <section className="flex items-center justify-center py-18 snap-center h-screen" id="about">
      <div className="md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16 py-30 px-4 m-16 overflow-y-auto">
        <div className="md:flex md:items-center md:justify-center h-fit">
          <Image className="" src="/images/two_cats.png" width={475} height={475} alt="Two pet cats" />

        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base text-justify lg:text-lg">
            I am a Data Scientist looking to become an ML Engineer. With my past leadership experience, I hope to inspire those under me in the future! <br/>
            While working on my GCP ML Engineer certification, I am also working on side projects and Kaggle to learn continuously. 
            <br/>
            So many project ideas, but yet so little time...
            <br/><br/>
            Oh, and I don't have a dog. I am more of a cat person, but dogs are cute too! 😸🐶
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
            <TabButton
              selectTab={() => handleTabChange("leadership")}
              active={tab === "leadership"}
              >
              {" "}
              Leadership{" "}
            </TabButton>
          </div>
          <div className="mt-8 flex flex-row justify-start" style={{minHeight: '175px'}}>  {/* minHeight to prevent jumping due to content change of TAB_DATA */}
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
