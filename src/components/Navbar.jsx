import { useScroll } from "motion/react";
import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeftIcon, Sun, Moon } from "lucide-react";
import themeContext from "../context/ThemeContext";
import Hamburger from "./Hamburger";
import UlNav from "./UlNav";

const Navbar = ({
  homeTarget,
  projectTarget,
  aboutTarget,
  experienceTarget,
}) => {
  const { scrollY } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const { locale, toogleLocale } = useContext(themeContext);
  const [active, setActive] = useState(false)


  const handlePrevNavigate = () => {
    const pathProject = pathname !== "/project";
    const certificateProject = pathname !== "/certificate";
    pathProject && certificateProject ? navigate(-1) : navigate("/");
  };

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setCurrentScrollPosition(latest);

    });

    return () => unsubscribe();
  }, [scrollY]);

  const glassClass = `${
    locale === "light" ? "bg-gray-50/50" : "bg-slate-900/50"
  } backdrop-blur-lg shadow-xl`;
  return (
    <header
      className={`p-4 xl:px-20 w-screen font-monteserat items-center fixed top-0 z-40  w-full text-slate-100 ${
        currentScrollPosition >= 50 && glassClass
      } transition-all ease-in ${locale === "light" && "shadow-xl"}`}
    >
      <nav className="flex items-center z-50 justify-between">
        <h1
          className={`font-bold text-2xl ${
            locale === "light" && "text-gray-700"
          } ${location.pathname !== "/" && "hidden"}`}
        >
          AF
        </h1>
        <div className={` ${ pathname !== '/' && 'justify-between w-full' } flex gap-8`}>
          {location.pathname === "/" ? (
            <>
            <UlNav homeTarget={homeTarget} projectTarget={projectTarget} aboutTarget={aboutTarget} experienceTarget={experienceTarget} locale={locale} active={active} setActive={setActive} />
            </>
          ) : (
            <span
              className={`hover:text-yellow-500 ${
                locale === "light" && "text-gray-700"
              } transition-colors ease-in cursor-pointer`}
              onClick={handlePrevNavigate}
            >
              <ArrowLeftIcon />
            </span>
          )}
          <div className="flex gap-4 items-center">
            <button onClick={toogleLocale} className="cursor-pointer">
              {locale === "dark" ? <Sun /> : <Moon className="text-gray-700" />}
            </button>
            <Hamburger active={active} setActive={setActive} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
