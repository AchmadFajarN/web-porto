import "./style/index.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Pages from "./pages/Project";
import Footer from "./components/Footer";
import Certificates from "./pages/Certificates";
import { useRef } from "react";

const App = () => {
  const homeTarget = useRef(null);
  const aboutTarget = useRef(null);
  const projectTarget = useRef(null);
  return (
    <>
      <div className="bg-slate-950 font-montserat min-w-full min-h-[100vh] text-slate-100 overflow-hidden">
        <Navbar
          homeTarget={homeTarget}
          projectTarget={projectTarget}
          aboutTarget={aboutTarget}
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
              />
            }
          />
          <Route path="/certificate" element={<Certificates />} />
          <Route path="/project/:id" element={<Pages />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
