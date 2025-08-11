import { useScroll } from "motion/react";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";

const Navbar = ({ homeTarget, projectTarget, aboutTarget }) => {
  const { scrollY } = useScroll();
  const location = useLocation();

  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);

  const handlerScroll = (target) => {
    target.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setCurrentScrollPosition(latest);
    });

    return () => unsubscribe();
  }, [scrollY]);

  const glassClass = "bg-slate-900/50 backdrop-blur-lg shadow-xl";
  return (
    <header
      className={`p-4 xl:px-20 font-monteserat items-center fixed top-0 z-40  w-full text-slate-100 ${
        currentScrollPosition >= 50 && glassClass
      } transition-all ease-in`}
    >
      <nav className="flex justify-between">       
        <h1 className={`font-bold text-2xl ${ location.pathname !== '/' && 'hidden' }`}>AF</h1>
        <div className="">
          {location.pathname === "/" ? (
            <>
              <ul className="flex gap-4">
                <li onClick={() => handlerScroll(homeTarget) } className="hover:text-yellow-500 cursor-pointer transition-colors ease-in">
                  Home
                </li>
                <li onClick={() => handlerScroll(projectTarget) } className="hover:text-yellow-500 cursor-pointer transition-colors ease-in">
                  Project
                </li>
                <li onClick={()  => handlerScroll(aboutTarget) } className="hover:text-yellow-500 cursor-pointer transition-colors ease-in">
                  About
                </li>
              </ul>
            </>
          ) : (
              <Link
                className="hover:text-yellow-500 transition-colors ease-in"
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
