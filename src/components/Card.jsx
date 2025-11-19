import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpLeftFromSquareIcon } from "lucide-react";
import { useContext } from "react";
import themeContext from "../context/ThemeContext";

const Card = ({ id, image, name, description, status, tools, duration }) => {
  const { locale } = useContext(themeContext);
  return (
    <Link to={`/project/${ id }`} className="hover:scale-105 transition-transform ease-in">
      <motion.div 
      initial={{ translateY: 50, opacity: 0 }}
      whileInView={{ translateY: 0, opacity:1 }}
      transition={{ duration: (duration + 1) * 0.5/2 }}
      className={`rounded-xl overflow-hidden pb-6 flex flex-col ${ locale === 'light' ? 'bg-gray-100 text-gray-900 shadow-2xl' : 'bg-radial-[at_100%_100%] from-slate-50/10 via-slate-900 via-60% to-slate-950 to-90% backdrop-blur-lg ' } shadow-xl`}>
        <div className="rounded-md">
          <img src={ image } alt={ "image" } className="w-full h-full object-center object-cover" />
        </div>
        <div className="flex-1 p-4">
          <h2 className="font-bold flex justify-between items-center">{name} <ArrowUpLeftFromSquareIcon /> </h2>
          <p className="my-2 text-sm md:text-[16px]">{description}</p>
          <p className="text-sm text-gray-50/50">{status}</p>
          <div className="flex gap-2 mt-2">
            {tools.map((key, index) => (
              <div key={index} className={`px-2 py-1 rounded-xl bg-gray-300/10 ${ locale === 'light' && 'bg-gray-900/10' }`}>
                <p className={`text-gray-50 ${ locale === 'light' && 'text-gray-900' }`}>{ key }</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;
