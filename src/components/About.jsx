import { motion } from "motion/react";
import { useContext } from "react";
import themeContext from "../context/ThemeContext";
import Underline from "./Underline";

const About = ({ aboutRef }) => {
  const { locale } = useContext(themeContext);
  return (
    <>
      <div ref={aboutRef} className="my-10 px-6 xl:px-20">
        <motion.h1
          initial={{ translateY: 35, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: ["easeInOut"] }}
          className={`${ locale === 'light' && 'text-gray-900' } md:text-4xl font-bold`}
        >
          About Me
        </motion.h1>
        <Underline />
        <div className="flex flex-col md:flex-row gap-16 justify-center items-center">
          <motion.div
            initial={{ translateY: 35, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: ["easeInOut"] }}
            className={`relative group`}
          >
            {locale === "dark" && (
              <>
                <div className="absolute w-full h-full animate-wiggle inset-0 border rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 blur group-hover:blur-md transition-all ease-in"></div>
              </>
            )}
            <div className={`${ locale === 'light' && 'shadow-2xl border' } size-40 xl:size-50 saturate-150 relative overflow-hidden rounded-full`}>
              <img src='/my-image.png' alt={'profile-image'} loading="lazy" className="w-full rounded-full h-full object-top object-cover" />
            </div>
          </motion.div>
          <motion.p
            initial={{ translateY: 35, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: ["easeInOut"] }}
            className={`text-xl max-w-3xl text-center md:text-start text-gray-300 ${ locale === 'light' && 'text-gray-900' }`}
          >
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
