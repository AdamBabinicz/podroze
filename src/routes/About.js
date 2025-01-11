import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutImg from "../assets/wietnam/32.avif";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={aboutImg} title="O nas" btnClass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
