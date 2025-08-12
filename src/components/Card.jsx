import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpLeftFromSquareIcon } from "lucide-react";

const Card = ({ id, image, name, description, status, tools, duration }) => {
  return (
    <Link to={`/project/${ id }`} className="hover:scale-105 transition-transform ease-in">
      <motion.div initial={{translateY: 300, opacity: 0}} whileInView={{translateY: 0, opacity: 1}} transition={{duration: `0.${duration}`, ease: ['easeInOut']}} className="rounded-md overflow-hidden flex flex-col bg-radial-[at_100%_100%] from-slate-50/10 via-slate-900 via-60% to-slate-950 to-90% backdrop-blur-lg shadow-xl">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="h-50 bg-cover bg-center rounded-md"
        ></div>
        <div className="flex-1 p-4">
          <h2 className="font-bold flex justify-between items-center">{name} <ArrowUpLeftFromSquareIcon /> </h2>
          <p className="my-2 text-sm">{description}</p>
          <p className="text-sm text-gray-50/50">{status}</p>
          <div className="flex gap-2 mt-2">
            {tools.map((key, index) => (
              <div key={index} className="px-2 py-1 rounded-xl bg-gray-300/10">
                <p className="text-gray-50">{ key }</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;
