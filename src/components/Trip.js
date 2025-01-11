import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/ameryka/1.avif";
import Trip2 from "../assets/ameryka/3.avif";
import Trip3 from "../assets/australia/1.avif";

function Trip() {
  return (
    <div className="trip">
      <h2>Podróże planowane</h2>
      <p>Ameryka Południowa, Australia</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Brazylia"
          text="Brazylia to kraj pełen niezapomnianych atrakcji, które przyciągają turystów z całego świata. Wspaniałe Wodospady Iguazú, jedna z największych atrakcji naturalnych na świecie, zachwycają swoją potęgą i pięknem, a Rio de Janeiro urzeka nie tylko słynną plażą Copacabana, ale i majestatycznym posągiem Chrystusa Odkupiciela na szczycie góry Corcovado. Dodatkowo, brazylijskie lasy deszczowe w Amazonii oferują unikalną możliwość odkrywania dzikiej przyrody i egzotycznej fauny."
        />
        <TripData
          image={Trip2}
          heading="Argentyna"
          text="Argentyna to kraj o niezwykłej różnorodności krajobrazów i atrakcji. W Patagonii można podziwiać majestatyczne lodowce, takie jak Perito Moreno, oraz zapierające dech w piersiach góry Andów. Z kolei w Buenos Aires, tętniącym życiem stolicy, warto zanurzyć się w atmosferze tango, odwiedzając lokalne milongi, a w Mendoza czeka na turystów światowej sławy winiarstwo, oferujące niezapomniane degustacje."
        />
        <TripData
          image={Trip3}
          heading="Australia"
          text="Australia to kraj, który zachwyca swoim niezwykłym połączeniem dzikiej przyrody i nowoczesnych miast. Great Barrier Reef, największa rafa koralowa na świecie, przyciąga miłośników nurkowania, oferując niepowtarzalne widoki podwodnego świata. Z kolei Sydney, z ikoniczną Operą i mostem Harbour Bridge, oraz dzikie obszary Outbacku to miejsca, które odkrywają niepowtarzalny charakter tego kontynentu."
        />
      </div>
    </div>
  );
}

export default Trip;
