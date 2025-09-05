"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { RxDownload, RxEyeOpen } from "react-icons/rx";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 mt-16 md:mt-40 w-full z-[20]"
    >
      {/* Left Content */}
      <div className="w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start">
        {/* Role Box */}
        <motion.div
          variants={slideInFromTop}
          className="flex items-center justify-center md:justify-start gap-2 py-[6px] px-[6px] border border-[#7042f88b] opacity-[0.9] rounded-lg max-w-fit mx-auto md:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] h-4 w-4 md:h-5 md:w-5" />
          <h1 className="text-[12px] md:text-[13px] text-gray-200 font-semibold">
            IEEE Bennett Member
          </h1>
        </motion.div>

        {/* Hero Heading */}
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-[600px] leading-tight"
        >
          Hi, {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          
          </span>{" "}
          I'm <br></br>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            PRANAV GUPTA
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-3 sm:my-4 max-w-[500px] mx-auto md:mx-0"
        >
          I&apos;m a Full Stack Software Engineer specializing in building modern web applications. 
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col sm:flex-row gap-4 mt-6 mx-auto md:mx-0 max-w-fit"
        >
          {/* Download Resume Button */}
          <a
            href="/Pranav_Gupta_Resume.pdf"
            download="Pranav_Gupta_Resume.pdf"
            className="group py-3 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-purple-500/25 flex items-center justify-center gap-2 min-w-[180px]"
          >
            <RxDownload className="w-4 h-4 group-hover:animate-bounce" />
            Download Resume
          </a>

          {/* View Projects Button */}
          <a
            href="#projects"
            className="py-3 px-6 bg-transparent border-2 border-purple-500 text-purple-400 text-sm font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-500/10 hover:text-purple-300 flex items-center justify-center gap-2 min-w-[180px]"
          >
            <RxEyeOpen className="w-4 h-4" />
            View Projects
          </a>
        </motion.div>
      </div>

      {/* Right Side Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex justify-center items-center mt-8 md:mt-0"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={400}
          width={400}
          draggable={false}
          className="select-none drop-shadow-lg sm:h-[450px] sm:w-[450px] md:h-[500px] md:w-[500px]"
        />
      </motion.div>
    </motion.div>
  );
};
