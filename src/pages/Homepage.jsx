import Hero from "../components/Hero";
import Project from "../components/Project";
import Tools from "../components/Tools";
import Contact from "../components/Contact";
import About from "../components/About";
import { useRef } from "react";

const Homepage = ({ homeTarget, aboutTarget, projectTarget, targetRef }) => {

  return (
    <>
      <Hero targetRef={ targetRef } homeTarget={ homeTarget } />
      <Project targetRef={ projectTarget } />
      <Tools />
      <About aboutRef={ aboutTarget } />
      <Contact />
    </>
  );
};

export default Homepage;
