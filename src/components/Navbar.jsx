import { useScroll } from "motion/react";
import { useState, useEffect, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeftIcon, Sun, Moon } from "lucide-react";
import themeContext from "../context/ThemeContext";

const Navbar = ({ homeTarget, projectTarget, aboutTarget }) => {
  const { scrollY } = useScroll();
  const location = useLocation();

  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const { locale, toogleLocale } = useContext(themeContext);

  const handlerScroll = (target) => {
    target.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setCurrentScrollPosition(latest);
    });

    return () => unsubscribe();
  }, [scrollY]);

  const glassClass = `${ locale === 'light' ? 'bg-gray-50/50' : 'bg-slate-900/50' } backdrop-blur-lg shadow-xl`;
  return (
    <header
      className={`p-4 xl:px-20 font-monteserat items-center fixed top-0 z-40  w-full text-slate-100 ${
        currentScrollPosition >= 50 && glassClass
      } transition-all ease-in ${ locale === 'light' && 'shadow-xl' }`}
    >
      <nav className="flex justify-between">
        <h1
          className={`font-bold text-2xl ${ locale === 'light' && 'text-gray-700' } ${
            location.pathname !== "/" && "hidden"
          }`}
        >
          AF
        </h1>
        <div className="">
          {location.pathname === "/" ? (
            <>
              <ul className="flex gap-4 md:gap-8">
                <li
                  onClick={() => handlerScroll(homeTarget)}
                  className={`hover:text-yellow-500 ${ locale === 'light' && 'text-gray-700' } cursor-pointer transition-colors ease-in`}
                >
                  Home
                </li>
                <li
                  onClick={() => handlerScroll(projectTarget)}
                  className={`hover:text-yellow-500 ${ locale === 'light' && 'text-gray-700' } cursor-pointer transition-colors ease-in`}
                >
                  Project
                </li>
                <li
                  onClick={() => handlerScroll(aboutTarget)}
                  className={`hover:text-yellow-500 ${ locale === 'light' && 'text-gray-700' } cursor-pointer transition-colors ease-in`}
                >
                  About
                </li>
                <button onClick={ toogleLocale } className="cursor-pointer">
                  { locale === 'dark'? <Sun /> : <Moon className="text-gray-700" /> }
                </button>
              </ul>
            </>
          ) : (
            <Link
              className={`hover:text-yellow-500 ${ locale === 'light' && 'text-gray-700' } transition-colors ease-in`}
              to={"/"}
            >
              <ArrowLeftIcon />
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
