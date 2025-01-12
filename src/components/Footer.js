import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h4>Podróże egzotyczne</h4>
          <p>Podróże nie tylko kształcą</p>
        </div>
        <div>
          <a
            href="https://www.facebook.com/profile.php?id=100005885345130"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Odwiedź mnie na Facebooku (otworzy się w nowym oknie)"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Zobacz na Twitter (otworzy się w nowym oknie)"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Zobacz na Instagramie (otworzy się w nowym oknie)"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h5>Linki</h5>
          <a href="/about">O&nbsp;nas</a>
          <a href="/plany">Plany</a>
          <a href="/kontakt">Kontakt</a>
        </div>
        <div>
          <h5>Projekty</h5>
          <a
            href="https://miejsca.net.pl/program/indie-pld-joga-rozlewiska"
            target="_blank"
            rel="noopener noreferrer"
          >
            Indie
          </a>
          <a
            href="https://miejsca.net.pl/program/kobieca-wyprawa-w-himalaje"
            target="_blank"
            rel="noopener noreferrer"
          >
            <nav>Nepal</nav>
          </a>
        </div>
        <div>
          <h5>Książki</h5>
          <a
            href="https://www.empik.com/the-witch-of-portobello-coelho-paulo,p1153160289,ksiazka-p"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Witch of Portobello
          </a>
          <a
            href="https://www.empik.com/lost-symbol-brown-dan,p1105109126,ksiazka-p"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Lost Symbol
          </a>
          <a
            href="https://www.empik.com/cyfrowa-twierdza-brown-dan,p1296862071,ksiazka-p"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cyfrowa twierdza
          </a>
          <a
            href="https://www.empik.com/anioly-i-demony-brown-dan,p1299796353,ksiazka-p"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anioły i demony
          </a>
        </div>
        <div>
          <h5>Filmy</h5>
          <a
            href="https://www.youtube.com/watch?v=Fay8kgeHerE"
            target="_blank"
            rel="noopener noreferrer"
          >
            Róża
          </a>
          <a
            href="https://www.youtube.com/watch?v=VRAm5dKQ-io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gladiator
          </a>
          <a
            href="https://www.youtube.com/watch?v=fMEmA-vuj-s"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Aviator
          </a>
          <a
            href="https://www.youtube.com/watch?v=n_6_jKF5Tew"
            target="_blank"
            rel="noopener noreferrer"
          >
            Katyń
          </a>
        </div>
      </div>
      <span>Radom, 2025 - {new Date().getFullYear()} </span>
    </div>
  );
};

export default Footer;
