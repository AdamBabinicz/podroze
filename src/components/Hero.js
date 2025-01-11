import "./HeroStyles.css";
import heroImg from "../assets/armenia/33.avif";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImg} alt="HeroImg" />
        <div className="hero-text">
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
