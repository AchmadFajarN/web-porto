import { motion } from "motion/react";
import { useContext } from "react";
import themeContext from "../context/ThemeContext";

const Experience = () => {
  const { locale } = useContext(themeContext);
  return (
    <div className="my-20 px-2 xl:px-20">
      <motion.h2 initial={{ translateY: 200, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} transition={{ duration: 0.5, ease: ['easeInOut'] }} className={`text-center font-semibold text-2xl ${ locale === 'light' && 'text-gray-700' }`}>Experience</motion.h2>
      <div className="mt-10">
        <div className="flex gap-4">
          <div className="flex flex-col justify-center items-center gap-2">
            <motion.div  className={`size-4 bg-gray-50/50 rounded-full ${ locale === 'light' && 'bg-gray-900' }`}></motion.div>
            <motion.div initial={{ scaleY: 0, opacity: 0 }} whileInView={{ scaleY: 1, opacity: 1 }} transition={{ duration: 0.5, ease: ['easeInOut'] }} className={`origin-top w-1 h-[24rem] md:h-50 bg-gray-50/50 ${ locale === 'light' && 'bg-gray-900' }`}></motion.div>
          </div>
          <motion.div className={`${ locale === 'light' && 'text-gray-900' }`} initial={{ translateX: 300, opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }} transition={{ duration: 0.5, ease: ['easeInOut'] }} >
            <h2 className="text-xl font-semibold">React & BackEnd</h2>
            <p className={`text-gray-50/50 ${ locale === 'light' && 'text-gray-600' }`}>Dicoding Academy</p>
            <p className="text-xs">March 2025 - August 2025</p>
            <p className="mt-2">Description:</p>
            <p>
              Completed an intensive training program focused on building modern
              web applications using React.js for the front-end and
              Node.js/Hapi.js for the back-end. Gained hands-on experience in
              developing RESTful APIs, integrating PostgreSQL databases,
              managing application state, implementing user authentication, and
              deploying applications. Delivered several end-to-end projects
              combining responsive design, business logic, and basic security
              practices.
            </p>
          </motion.div>
        </div>
        <div className="flex gap-4 mt-2">
          <div className="flex flex-col justify-center items-center gap-2">
            <motion.div  className={`size-4 bg-gray-50/50 rounded-full ${ locale === 'light' && 'bg-gray-900' }`}></motion.div>
            <motion.div initial={{ scaleY: 0, opacity: 0 }} whileInView={{ scaleY: 1, opacity: 1 }} transition={{ duration: 0.5, ease: ['easeInOut'] }} className={`origin-top w-1 md:h-50 h-[24rem] bg-gray-50/50 ${ locale === 'light' && 'bg-gray-900' }`}></motion.div>
          </div>
          <motion.div className={`${ locale === 'light' && 'text-gray-900' }`} initial={{ translateX: 300, opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }} transition={{ duration: 0.8, ease: ['easeInOut'] }} >
            <h2 className="text-xl font-semibold">Fullstack Bootcamp Course</h2>
            <p className={`text-gray-50/50 ${ locale === 'light' && 'text-gray-600' }`}>Udemy</p>
            <p className="text-xs">March 2024 - December 2025</p>
            <p className="mt-2">Description:</p>
            <p>
              Completed a self-paced online course covering modern fullstack
              development and blockchain integration. Learned to build
              responsive front-end applications with React.js, develop and
              consume RESTful APIs with Node.js/Express, and work with
              PostgreSQL databases. Explored Web3 fundamentals, including smart
              contracts, Ethereum blockchain, and integration with decentralized
              applications (dApps). Created practice projects combining
              traditional web technologies with blockchain features.
            </p>
          </motion.div>
        </div>
        <div className="flex gap-4 mt-2">
          <div className="flex flex-col items-center gap-2">
            <motion.div intial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={`size-4 bg-gray-50/50 rounded-full ${ locale === 'light' && 'bg-gray-900' }`}></motion.div>
          </div>
          <motion.div className={`${ locale === 'light' && 'text-gray-900' }`} initial={{ translateX: 300, opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }} transition={{ duration: 0.8, ease: ['easeInOut'] }}>
            <h2 className="text-xl font-semibold">FrontEnd Developer</h2>
            <p className={`text-gray-50/50 ${ locale === 'light' && 'text-gray-600' }`}>Freenlance</p>
            <p className="text-xs">March 2025 - August 2025</p>
            <p className="mt-2">Description:</p>
            <p>
              Developed a responsive and user-friendly website for an Islamic
              boarding school using React.js, Tailwind CSS, and Framer Motion.
              Implemented a modern UI design with smooth animations to enhance
              user experience, ensuring accessibility across various devices.
              Collaborated with the client to translate their requirements into
              an engaging and functional interface, focusing on clarity,
              performance, and visual appeal
            </p>
          </motion.div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Experience;
