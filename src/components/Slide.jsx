import { ChevronRight, ChevronLeft } from "lucide-react"
import { useState, useContext } from "react";
import themeContext from "../context/ThemeContext";
import { motion } from "motion/react";

const Slide = ({ bgImage }) => {
  const { locale } = useContext(themeContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const indexSlide = isFirstSlide ? bgImage.length - 1 : currentIndex - 1;
    setCurrentIndex(indexSlide);
  };

  const nextSlide = () => {
    const isEndSlide = currentIndex === bgImage.length -1;
    const indexSlide = isEndSlide ? 0 : currentIndex + 1;
    setCurrentIndex(indexSlide);
  }
  return (
    <motion.div initial={{translateY: 300, opacity: 0}} animate={{translateY: 0, opacity: 1}} transition={{duration: 0.5, ease: ['easeInOut']}} className="flex-1">
      <h1 className="text-2xl font-bold mb-4">Screenshoots:</h1>
      <div className="relative h-[240px] md:h-[420px] w-full">
        <div style={{backgroundImage: `url(${bgImage[currentIndex]})`}} className={`absolute flex justify-between duration-500 items-center rounded-2xl inset-0 bg-center bg-cover w-full h-full shadow-xl`}>
          <div onClick={prevSlide} className="p-4 bg-black/70 rounded-md cursor-pointer">
            <ChevronLeft />
          </div>
          <div onClick={nextSlide} className="p-4 bg-black/70 rounded-md cursor-pointer">
            <ChevronRight />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Slide