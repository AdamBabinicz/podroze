import React, { useState } from "react";
import "./HeroStyles.css";
import Modal from "../routes/Modal";

function Hero(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImg} alt="HeroImg" />
        <div className="hero-text">
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          <button className={props.btnClass} onClick={openModal}>
            {props.buttonText}
          </button>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          title="Cytaty z Dalajlamy"
          text="„Podróżowanie uczy, że&nbsp;różnice kulturowe są bogactwem, a&nbsp;nie przeszkodą. Każdy człowiek, którego spotykasz, ma coś wartościowego, co możesz od niego zaczerpnąć.”"
          text1="„Podróż dookoła świata jest niczym, jeśli nie rozpoczniesz podróży w&nbsp;głąb siebie. Największe odkrycia dokonują się w&nbsp;ciszy umysłu.”"
          text2="„Podróżując, możemy zobaczyć, jak bardzo wszyscy ludzie są do siebie podobni. Wszyscy pragniemy szczęścia, pokoju i&nbsp;miłości. To przypomina nam, że&nbsp;jesteśmy częścią jednej, wspólnej rodziny.”"
          text3="„Spotykając ludzi z&nbsp;różnych stron świata, uczysz się więcej o&nbsp;sobie. To lustro, które pokazuje, kim naprawdę jesteś.”"
          image={props.image}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default Hero;
