import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import contactImg from "../assets/afryka/4.avif";
import KontaktForm from "../components/KontaktForm";

function Kontakt() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={contactImg}
        title="Service"
        btnClass="hide"
      />
      <KontaktForm />
      <Footer />
    </>
  );
}

export default Kontakt;
