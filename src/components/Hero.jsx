import { Typewriter } from "react-simple-typewriter";
import {
  Download,
  FolderGit2,
  Linkedin,
  Mail,
  ChevronDown,
} from "lucide-react";
import themeContext from "../context/ThemeContext";
import { useContext } from "react";

const Hero = ({ targetRef, homeTarget }) => {
  const { locale } = useContext(themeContext);

  const handlerScroll = () => {
    targetRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/linkedin.pdf';
    link.download = 'achamd-fajar-linkedin-cv.pdf'
    link.click();
  }

  const data = ["Web Developer", "Front-End", "Back-End"];

  return (
    <div
      ref={homeTarget}
      className={`relative w-full pt-10 flex flex-col items-center h-screen transition-all duration-150 ${
        locale === "light"
          ? "bg-gray-100"
          : "bg-radial-[at_50%_0%] from-slate-50/20 via-slate-950 via-60% to-slate-950 to-90%"
      } `}
    >
      {locale === "dark" && (
        <>
          <div className="absolute size-200 -top-[50%] animate-wiggle ">
            <div className="absolute shadow-[0_0_10px_#ffffff] size-1 bg-white border bottom-0 rounded-full"></div>
            <div className="absolute size-1 shadow-[0_0_10px_#ffffff] bg-white border bottom-0 right-0 rounded-full"></div>
          </div>
          <div className="absolute size-[30rem] -top-[50%] animate-wiggle ">
            <div className="absolute size-1 shadow-[0_0_10px_#ffffff] bg-white border bottom-0 rounded-full"></div>
            <div className="absolute size-1 bg-white border bottom-0 right-0 rounded-full"></div>
          </div>
          <div className="absolute size-[40rem] -top-[50%] animate-wiggle ">
            <div className="absolute size-1 shadow-[0_0_10px_#ffffff] bg-white border top-0 rounded-full"></div>
            <div className="absolute size-1 shadow-[0_0_10px_#ffffff] bg-white border top-0 right-0 rounded-full"></div>
          </div>
          <div className="absolute size-[40rem] -top-[50%] animate-wiggle ">
            <div className="absolute size-1 shadow-[0_0_10px_#ffffff] bg-white border top-25 rounded-full"></div>
            <div className="absolute size-1 shadow-[0_0_10px_#ffffff] bg-white border top-25 right-0 rounded-full"></div>
          </div>
        </>
      )}
      {/* cek */}
      <div className="mt-40 text-center">
        <h1 className={`font-bold text-xl md:text-4xl ${ locale === 'light' && 'text-gray-800' }`}>Hello,</h1>
        <h1 className={`${ locale === 'light' && 'text-gray-800' } font-semibold text-xl md:text-4xl`}>
          My name is Fajar. And I'm{" "}
        </h1>
        <p className={`font-google-sans  ${ locale === 'light' && 'text-gray-800' } my-4 md:text-xl font-light`}>
          <Typewriter loop={false} words={data} />
          <span className="border size-2 animate-ping"></span>
        </p>
        <p className={`text-sm  ${ locale === 'light' && 'text-gray-800' }`}>
          "Transforming Ideas into Interactive Interfaces"
        </p>
      </div>
      <div className="my-8 z-20 flex flex-col md:flex-row gap-4">
        <button onClick={ handleDownload } className={`cursor-pointer font-semibold group text-sm justify-center items-center py-2 px-4 ${ locale === 'light'? 'bg-gray-900 border border-gray-300 hover:text-gray-900 hover:border-gray-900 hover:bg-transparent':' bg-linear-to-t from-sky-500 to-indigo-500 hover:shadow-[0_0_20px_2px_rgba(59,130,246,0.5)]' } transition-all ease-in duration-300 rounded-md`}>
          <div className={`flex w-full h-full  ${ locale === 'light' ? '':'shadow-[0_25px_10px_rgba(0,0,0,0.3)]' } justify-center items-center gap-2`}>
            <Download size={20} /> 
            Download CV
          </div>
        </button>
        <a
          href="https://github.com/AchmadFajarN"
          target="_blank"
          className={`cursor-pointer font-semibold text-sm justify-center group items-center py-2 px-4 ${ locale === 'light'? 'bg-gray-900 border border-gray-300 hover:text-gray-900 hover:border-gray-900 hover:bg-transparent':' bg-linear-to-t from-emerald-400 to-green-500 hover:shadow-[0_0_20px_2px_rgba(52,211,153,0.5)]'} transition-all ease-in duration-300 rounded-md`}
        >
          <div className={`flex w-full h-full ${ locale === 'light' ? '':'shadow-[0_25px_10px_rgba(0,0,0,0.3)]' } justify-center items-center gap-2`}>
            <FolderGit2 size={20} />
            See My Github
          </div>
        </a>
      </div>
      <div className="flex gap-4 mt-8 z-20">
        <a
          href="https://www.linkedin.com/in/achmad-fajar-28b00335a/"
          target="_blank"
          className={`p-2 cursor-pointer bg-white/10 hover:bg-white/20 transition-colors duration-300 ease-in-out rounded-full ${ locale === 'light' ? 'shadow-[0_10px_20px_rgba(0,0,0,0.3)]': 'shadow-[0_25px_10px_rgba(0,0,0,0.3)]' }`}
        >
          <Linkedin className={`text-gray-50/50 ${ locale === 'light' && 'text-gray-700' }`} />
        </a>
        <div className={`p-2 cursor-pointer bg-white/10 hover:bg-white/20 transition-colors duration-300 ease-in-out rounded-full ${ locale === 'light' ? 'shadow-[0_10px_20px_rgba(0,0,0,0.3)]' : 'shadow-[0_25px_10px_rgba(0,0,0,0.3)]'}`}>
          <Mail className={`text-gray-50/50 ${ locale === 'light' && 'text-gray-700' }`} />
        </div>
      </div>
      <div onClick={handlerScroll} className="mt-10 z-20 cursor-pointer">
        <ChevronDown className={`text-gray-50/50 animate-bounce ${ locale === 'light' && 'text-gray-700' }`} />
      </div>
    </div>
  );
};

export default Hero;
