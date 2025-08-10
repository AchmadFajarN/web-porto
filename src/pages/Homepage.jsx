import Hero from "../components/Hero";
import Project from "../components/Project";
import Tools from "../components/Tools";
import Contact from "../components/Contact";
import About from "../components/About";
import { useRef } from "react";

const Homepage = () => {
  const targetRef = useRef(null);
  
  return (
    <>
      <Hero targetRef={targetRef} />
      <Project targetRef={targetRef} />
      <Tools />
      <About />
      <Contact />
    </>
  );
};

export default Homepage;
