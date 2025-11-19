import { useContext } from "react";
import themeContext from "../context/ThemeContext";
import { motion } from "motion/react";

const Underline = () => {
  const { locale } = useContext(themeContext);
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 0.4, ease: ["easeIn"] }}
      className={`md:w-20 w-10 h-1 origin-left mt-2 mb-8 md:mt-8 md:mb-16 ${
        locale === "dark" ? "bg-white" : "bg-gray-900"
      }`}
    ></motion.div>
  );
};

export default Underline;
