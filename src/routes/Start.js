import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroImg from "../assets/armenia/33.avif";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Start() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={heroImg}
        title="Jezioro Sevan – Perła Armenii wśród Gór Kaukazu"
        text="Przeżyj niezapomnianą podróż do serca Kaukazu, gdzie wody jeziora Sevan spotykają się z&nbsp;nieosiągalnymi szczytami gór."
        // buttonText="Plan Podróży"
        // url="/"
        // btnClass="show"
      />
      <Destination />
      {/* <Trip /> */}
      <Footer />
    </>
  );
}

export default Start;
