import CertificateCard from "./CertificateCard";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useContext } from "react";
import themeContext from "../context/ThemeContext";

const ListCardCertificate = ({ data }) => {
  const { locale } = useContext(themeContext);
  const location = useLocation()  
  return (
    <>
        <div className="my-20">
            <motion.h2 initial={{ translateY: 200, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} transition={{ duration: 0.5, ease: ['easeInOut'] }} className="text-center text-2xl mb-8 font-bold">Certificates</motion.h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 p-2 xl:px-20'>
                {
                    data.map((certificate) => (
                        <CertificateCard 
                        key={ certificate.id }
                        title={ certificate.title } 
                        academy={ certificate.academy } 
                        exp={ certificate.exp } 
                        release={ certificate.release }
                        link={ certificate.credentials } 
                        image={ certificate.image }   />
                    ))
                }
            </div>
        </div>
        <div className="px-2 flex mb-20 justify-center xl:px-20">
            {
                location.pathname === '/' && <Link to={'/certificate'} className={`hover:text-yellow-500 transition-colors ease-in-out font-semibold flex gap-3 ${ locale === 'light' && 'text-gray-900' }`}>See More <ArrowRight /></Link>
            }
        </div>
    </>
  )
}

export default ListCardCertificate