import { getAllProject } from "../data/constant";
import { motion } from "motion/react";
import { useContext } from "react";
import themeContext from "../context/ThemeContext";
import ListProject from "./ListProject";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
        className={`my-20 text-center md:text-4xl font-bold ${ locale === 'light' && 'text-gray-900' }`}
      >
        Projects
      </motion.h1>
      <ListProject data={projectDisplay} />
      <div className="px-2 flex my-20 justify-center xl:px-20">
        {
          location.pathname === '/' && <Link to={'/project'} className={`hover:text-yellow-500 transition-colors ease-in-out font-semibold flex gap-3 ${ locale === 'light' && 'text-gray-900' }`}>See More <ArrowRight /></Link>
        }
      </div>
    </div>
  );
};

export default Project;
