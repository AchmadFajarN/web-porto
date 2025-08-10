import profile from "../assets/profile.jpg";
import { motion } from "motion/react";

const About = ({ aboutRef }) => {
  return (
    <>
      <div ref={ aboutRef } className="my-10 px-6">
         <motion.h1 initial={{translateY: 100, opacity: 0}} whileInView={{translateY: 0, opacity: 1}} transition={{duration: 0.4, ease: ['easeIn']}} className="my-20 text-center md:text-4xl font-bold">About Me</motion.h1> 
        <div className="flex flex-col justify-center gap-8 items-center">
          <motion.div initial={{translateY: 200, opacity: 0}} whileInView={{translateY: 0, opacity: 1}} transition={{duration: 0.6, ease: ['easeIn']}} className="relative group">
            <div className="absolute w-full h-full animate-wiggle inset-0 border rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 blur group-hover:blur-md transition-all ease-in"></div>
            <div
              style={{ backgroundImage: `url(${profile})` }}
              className="size-40 xl:size-50 brightness-80 saturate-150 relative bg-center bg-cover rounded-full"
            ></div>
          </motion.div>
          <motion.p initial={{translateY: 200, opacity: 0}} whileInView={{translateY: 0, opacity: 1}} transition={{duration: 0.6, ease: ['easeIn']}} className="text-xl text-center mb-16 max-w-3xl mx-auto text-gray-300">
            "A passionate and results-driven web developer with expertise in
            React, NodeJs and other javascript libraries or frameworks. Proven
            ability to build and maintain responsive, user-friendly websites and
            applications. Eager to contribute to a collaborative team
            environment and create innovative solutions."
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default About;
