import CertificateCard from "./CertificateCard";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useContext } from "react";
import themeContext from "../context/ThemeContext";
import Underline from "./Underline";

const ListCardCertificate = ({ data }) => {
  const { locale } = useContext(themeContext);
  const location = useLocation();
  return (
    <>
      <div className="my-20">
        <div className="px-8 md:px-20">
          <motion.h1
            initial={{ translateY: 35, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: ["easeInOut"] }}
            className={` ${
              locale === "light" && "text-gray-900"
            } text-2xl xl:text-4xl mb-8 font-bold`}
          >
            Certificates
          </motion.h1>
          <Underline />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 p-4 xl:px-20">
          {data.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              title={certificate.title}
              academy={certificate.academy}
              exp={certificate.exp}
              release={certificate.release}
              link={certificate.credentials}
              image={certificate.image}
              durationAnimation={index}
            />
          ))}
        </div>
      </div>
      <div className="px-2 flex my-20 justify-end xl:px-20">
        {location.pathname === "/" && (
          <Link
            to={"/project"}
            className={`group font-semibold md:text-xl ${
              locale === "light" && "text-gray-900"
            }`}
          >
            <span className="flex items-center gap-3">
              See More <ArrowRight />
            </span>
            <span className={`block mt-2 w-full h-[2px] bg-slate-900 ${ locale === 'dark' && 'bg-white' } scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100`}></span>
          </Link>
        )}
      </div>
    </>
  );
};

export default ListCardCertificate;
