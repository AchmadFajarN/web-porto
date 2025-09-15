import { motion } from "motion/react";
import { useContext } from "react";
import themeContext from "../context/ThemeContext";
import { experience } from "../data/constant";

const Experience = () => {
  const { locale } = useContext(themeContext);
  return (
    <div className="my-20 px-6 xl:px-20">
      <motion.h2
        initial={{ translateY: 20, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: ["easeInOut"] }}
        className={`text-center font-semibold text-2xl ${
          locale === "light" && "text-gray-700"
        } mb-10`}
      >
        Experience
      </motion.h2>
      {experience.map((ex, index) => (
        <div className={`text-gray-900 ${ locale === 'dark' && 'text-white' }`}>
          <div className="flex gap-2 items-center mt-4">
            <div className={`size-2 md:size-3 rounded-full bg-gray-900 ${ locale === 'dark' && 'bg-white' }`}></div>
            <h3 className="font-semibold md:text-xl">{ex.position}</h3>
          </div>

          <div className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className="w-2 md:w-3 transparent"></div>
              <motion.div 
              initial={{ scaleY: 0 }} 
              whileInView={{ scaleY: 1 }}
              transition={{ duration: (index + 1) * 0.5, ease: ['easeInOut'] }}
              className={`h-[100%] origin-top ${ index === experience.length - 1 && 'hidden' } w-[1px] bg-gray-900 ${ locale === 'dark' && 'bg-white' }`}></motion.div>
            </div>
            <motion.div 
            initial={{ translateX: 30, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ duration: (index + 1) * 0.5 / 2, ease: ['easeInOut'] }}
            className="pt-2">
              <p>{ex.place}</p>
              <p className="text-xs">{ex.date}</p>
              <h4 className="font-semibold mb-2 mt-4">Description:</h4>
              <p className="text-sm md:text-[16px]">{ex.description}</p>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
