import { Link } from "react-router-dom";
import { useScroll } from "motion/react";
import { useState, useEffect } from "react";
const Navbar = () => {
  const { scrollY } = useScroll(); // Mendapatkan MotionValue untuk posisi scroll Y

  // State lokal untuk menyimpan nilai scrollY yang dapat dirender
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setCurrentScrollPosition(latest); 
    });

    return () => unsubscribe();
  }, [scrollY]);

  const glassClass = 'bg-slate-900/50 backdrop-blur-lg shadow-xl'
  return (
    <header className={`p-4 xl:px-16 xl:py-8 items-center fixed top-0 z-40  w-full text-slate-100 ${currentScrollPosition >= 50 && glassClass} transition-all ease-in`}>
      <nav className="flex justify-between">
        <h1 className="font-semibold">Achmad Fajar</h1>
        <ul className="flex gap-4">
          <Link
            to={"/"}
            className="hover:text-yellow-500 transition-colors ease-in"
          >
            Home
          </Link>
          <Link
            to={"/blog"}
            className="hover:text-yellow-500 transition-colors ease-in"
          >
            Blog
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
