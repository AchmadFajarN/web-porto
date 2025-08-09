import { useScroll } from "motion/react";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const { scrollY } = useScroll();
  const location = useLocation();

  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);

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
        <h1 className="font-bold text-2xl">AF</h1>
        <ul className="flex gap-4">
          {location.pathname === "/" ? (
            <>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors ease-in">
                Home
              </li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors ease-in">
                Project
              </li>
              <li className="hover:text-yellow-500 cursor-pointer transition-colors ease-in">
                About
              </li>
            </>
          ) : (
            <li><Link className="hover:text-yellow-500 transition-colors ease-in" to={'/'}>Home</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
