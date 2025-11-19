import { getAllProject } from "../data/constant";
import { motion } from "motion/react";
import { useContext } from "react";
import themeContext from "../context/ThemeContext";
import ListProject from "./ListProject";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Underline from "./Underline";

const Project = ({ targetRef }) => {
  const { locale } = useContext(themeContext);
  const data = getAllProject();
  const projectDisplay = data.filter((pro) => pro.isDisplay);

  return (
    <div ref={targetRef} className="mt-50 px-4 xl:px-20">
      <motion.h1
        initial={{ translateY: 100, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: ["easeIn"] }}
        className={`md:text-4xl font-bold ${
          locale === "light" && "text-gray-900"
        }`}
      >
        Projects
      </motion.h1>
      <Underline />
      <ListProject data={projectDisplay} />
      <div className="flex my-20 justify-end">
        {location.pathname === "/" && (
          <Link
            to={"/project"}
            className={`group font-semibold md:text-xl ${
              locale === "light" && "text-gray-900"
            }`}
          >
            <span className="flex items-center gap-3">See More <ArrowRight /></span>
            <span className={`block mt-2 w-full h-[2px] bg-slate-900 ${ locale === 'dark' && 'bg-white' } scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100`}></span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Project;
