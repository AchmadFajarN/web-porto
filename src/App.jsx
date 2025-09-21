import "./style/index.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Pages from "./pages/Project";
import Footer from "./components/Footer";
import ListProjectPage from "./pages/ListProjectPage";
import Certificates from "./pages/Certificates";
import { useRef, useState, useMemo } from "react";
import themeContext from "./context/ThemeContext";
import ScrollOnTop from "./components/ScrollOntop";

const App = () => {
  const [locale, setLocale] = useState('light');
  const homeTarget = useRef(null);
  const aboutTarget = useRef(null);
  const projectTarget = useRef(null);
  const experienceTarget = useRef(null)

  const toogleLocale = () => {
    setLocale(prevState => prevState === 'light' ? 'dark' : 'light');
  }

  const localeContextValue = useMemo(() => {
    return {
      locale,
      toogleLocale
    }
  }, [locale]);

  return (
    <>
    <themeContext.Provider value={ localeContextValue } >
      <ScrollOnTop />
      <div className={`${ locale === 'light' ? 'bg-gray-100' : 'bg-slate-950'} transition-colors duration-200 font-montserat min-w-full min-h-[100vh] text-slate-100 overflow-hidden`}>
        <Navbar
          homeTarget={homeTarget}
          projectTarget={projectTarget}
          aboutTarget={aboutTarget}
          experienceTarget={experienceTarget}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                homeTarget={homeTarget}
                aboutTarget={aboutTarget}
                projectTarget={projectTarget}
                targetRef={projectTarget}
                experienceTarget={experienceTarget}
              />
            }
          />
          <Route path="/certificate" element={<Certificates />} />
          <Route path='/project' element={ <ListProjectPage /> } />
          <Route path="/project/:id" element={<Pages />} />
        </Routes>
        <Footer />
      </div>
    </themeContext.Provider>
    </>
  );
};

export default App;
