import Hero from "../components/Hero";
import Project from "../components/Project";
import Tools from "../components/Tools";
import Contact from "../components/Contact";
import About from "../components/About";
import Experience from "../components/Experience";
import ListCardCertificate from "../components/ListCardCertificate";
import { getDisplayCertificate } from "../data/constant"

const Homepage = ({ homeTarget, aboutTarget, projectTarget, targetRef }) => {
  const data = getDisplayCertificate();
  return (
    <>
      <Hero targetRef={ targetRef } homeTarget={ homeTarget } />
      <Project targetRef={ projectTarget } />
      <About aboutRef={ aboutTarget } />
      <Tools />
      <Contact />
      <Experience />
      <ListCardCertificate data={ data } />
    </>
  );
};

export default Homepage;
