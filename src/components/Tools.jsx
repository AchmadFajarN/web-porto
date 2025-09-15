import vite from "../assets/vite.svg";
import happi from "../assets/happi.svg";
import express from "../assets/express.svg";
import javascript from "../assets/javascript.svg";
import nodejs from "../assets/nodejs.svg";
import postgres from "../assets/postgres.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import vscode from "../assets/vscode.svg";
import { motion } from "motion/react";
import { useContext } from "react";
import themeContext from "../context/ThemeContext";

const Tools = () => {
  const { locale } = useContext(themeContext);
  const project = [
    vite,
    happi,
    express,
    javascript,
    nodejs,
    postgres,
    react,
    tailwind,
    vscode,
  ];
  return (
    <>
      <motion.h1 initial={{translateY: 35, opacity: 0}} whileInView={{translateY: 0, opacity: 1}} transition={{duration: 0.4, ease: ['easeInOut']}} className={`my-20 md:my-50 text-center md:text-4xl font-bold ${ locale === 'light' && 'text-gray-900' }`}>My Tools:</motion.h1> 
      <div style={{maskImage: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))'}} className="relative mb-50 px-20 overflow-hidden h-[80px]  w-90% mx-auto max-w-[1536px]">
        {project.map((key, index) => {
          const delay =
            (30 / project.length) * (project.length - (index + 1)) * -1;
          return (
            <div key={index} style={{animationDelay: `${delay}s`}} className={`animate-infinite-scroll  absolute left-[100%] size-10 md:size-20`}>
              <img src={key} alt="" className={`w-full h-full ${ locale === 'light' ? 'grayscale-0' : 'grayscale-100' } hover:grayscale-0 transition-all ease-in duration-200`} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tools;
