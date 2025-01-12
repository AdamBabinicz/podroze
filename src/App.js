import { Route, Routes, useNavigate } from "react-router-dom";
import Armenia from "./components/Armenia";
import Wietnam from "./components/Wietnam";
import Kambodza from "./components/Kambodza";
import Rpa from "./components/Rpa";
import Start from "./routes/Start";
import About from "./routes/About";
import Service from "./routes/Service";
import Kontakt from "./routes/Kontakt";
import ScrollToTop from "./ScrollToTop";
import CookieConsent from "react-cookie-consent";
import PrivacyPolicy from "./PrivacyPolicy";
import "./style.css";

export default function App() {
  const navigate = useNavigate();

  const handlePrivacyPolicyClick = (event) => {
    event.preventDefault(); // Zapobiega domyślnemu odświeżeniu strony
    navigate("/privacypolicy"); // Przekierowanie do strony Polityka Prywatności
    document.querySelector(".CookieConsent").style.display = "none"; // Ukrycie paska ciasteczek
  };

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
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
      <CookieConsent
        location="bottom"
        buttonText="Zgadzam się"
        declineButtonText="Nie zgadzam się"
        cookieName="myCookieConsent"
      >
        Nasza strona używa plików cookies w&nbsp;celu zapewnienia lepszej
        funkcjonalności, personalizacji treści oraz analizy ruchu na stronie.
        Dzięki plikom cookies możemy dostosować stronę do Twoich potrzeb
        i&nbsp;preferencji. Możesz dowiedzieć się więcej o&nbsp;wykorzystywanych
        plikach cookies oraz sposobach ich zarządzania w&nbsp;naszej&nbsp;
        <a href="/privacypolicy" onClick={handlePrivacyPolicyClick}>
          Polityce Prywatności
        </a>
        .
      </CookieConsent>
    </div>
  );
}
