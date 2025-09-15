import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useContext } from "react";
import themeContext from "../context/ThemeContext";
const CertificateCard = ({ title, academy, exp, link, image, release, durationAnimation }) => {
  const { locale } = useContext(themeContext);
  return (
    <motion.div initial={{ translateY: 75, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} transition={{ duration: (durationAnimation + 1) * 0.5 / 4, ease: ['easeInOut'] }} className={`shadow rounded-md p-2 ${ locale === 'light' ? 'bg-gray-100 shadow-xl':'gradient-primary' }`}>
      <div className="rounded-md w-full h-40">
        <img src={ image } alt={ title } loading="lazy" className="w-full h-full object-cover object-center" />
      </div>
      <div className={`mt-4 ${ locale === 'light' && 'text-gray-900' }`}>
        <h2 className="font-semibold">{title}</h2>
        <p className={`text-sm text-gray-50/50 ${ locale === 'light' && 'text-gray-600' }`}>{academy}</p>
        <p className="mt-2 text-xs font-semibold">{ release ? 'RELEASE:' : 'EXP:' } {exp ? exp : release}</p>
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
