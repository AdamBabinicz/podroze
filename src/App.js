import { Route, Routes } from "react-router-dom";
import Armenia from "./components/Armenia";
import Wietnam from "./components/Wietnam";
import Kambodza from "./components/Kambodza";
import Rpa from "./components/Rpa";
import Start from "./routes/Start";
import About from "./routes/About";
import Service from "./routes/Service";
import Kontakt from "./routes/Kontakt";
import ScrollToTop from "./ScrollToTop";
import "./style.css";

export default function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/about" element={<About />} />
        <Route path="/plany" element={<Service />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/armenia" element={<Armenia />} />
        <Route path="/wietnam" element={<Wietnam />} />
        <Route path="/kambodza" element={<Kambodza />} />
        <Route path="/rpa" element={<Rpa />} />
      </Routes>
    </div>
  );
}
