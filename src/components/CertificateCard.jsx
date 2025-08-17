import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useContext } from "react";
import themeContext from "../context/ThemeContext";
const CertificateCard = ({ title, academy, time, link, image }) => {
  const { locale } = useContext(themeContext);
  return (
    <motion.div initial={{ translateY: 300, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} transition={{ duration: 0.6, ease: ['easeInOut'] }} className={`shadow rounded-md p-2 ${ locale === 'light' ? 'bg-gray-100 shadow-xl':'gradient-primary' }`}>
      <div style={{ backgroundImage: `url(${ image })` }} className="rounded-md bg-cover bg-center w-full h-40"></div>
      <div className={`mt-4 ${ locale === 'light' && 'text-gray-900' }`}>
        <h2 className="font-semibold">{title}</h2>
        <p className={`text-sm text-gray-50/50 ${ locale === 'light' && 'text-gray-600' }`}>{academy}</p>
        <p className="mt-2 text-xs font-semibold">Exp: {time}</p>
        <a
          href={link}
          target="_blank"
          className={`flex items-center gap-2 mt-2 text-sm`}
        >
          Credentials <ArrowRight className="-rotate-45" />{" "}
        </a>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
