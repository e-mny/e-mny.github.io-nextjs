"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        > */}
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="animate-slidein [--slidein-delay:300ms] opacity-0 text-white -mb-5 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello! I&apos;m{" "} Enoch
            </span>
            <br></br>
            {/* <TypeAnimation
              sequence={[
                "Enoch",
                1000,
                "Data Scientist",
                1000,
                "ML Engineer",
                1000,
                "Pet Lover",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            /> */}
          </h1>
          <p className="animate-slidein [--slidein-delay:500ms] opacity-0 text-[#ADB7BE] text-sm mb-10 sm:text-base mt-1 lg:text-lg">
            Data Scientist. Pet Lover. Discoverer.
          </p>
          <br/>
          <p className="animate-slidein [--slidein-delay:700ms] opacity-0 text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Guess the lie! <br/><br/>
              🐧 I hacked into a computer when I was 10. <br/> 
              📱 I enjoy dismantling iPhones and laptops to upgrade its parts. <br/> 
              🐕 I have a pet dog. <br/>


          </p>
          <div className="animate-slidein [--slidein-delay:900ms] opacity-0">
            <Link
              href="/#contact"
              className="glow-on-hover hover:glow px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Let&apos;s Connect
            </Link>
            <Link
              href="/pdf/EnochMok_Resume.pdf"
              target="_blank"
              className="glow-on-hover hover:glow px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        {/* </motion.div> */}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero_image_2.png"
              alt="hero image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
