import "./style/index.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Pages from './pages/Project';
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="bg-slate-950 font-montserat min-w-full min-h-[100vh] text-slate-100 overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/project/:id" element={<Pages />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
