import { getAllProject } from "../data/constant";
import Card from "./Card";
import { motion } from "motion/react";
import { useContext } from "react";
import themeContext from "../context/ThemeContext";

const Project = ({ targetRef }) => {
  const { locale } = useContext(themeContext);
  const data = getAllProject();

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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 my-2">
        {data.map((key, index) => (
          <Card
            id={key.id}
            key={index}
            image={key.image}
            name={key.name}
            description={key.description}
            status={key.status}
            tools={key.tools}
            duration={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
