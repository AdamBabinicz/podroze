import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/ameryka/1.avif";
import Trip2 from "../assets/ameryka/4.avif";
import Trip3 from "../assets/ameryka/2.avif";

function Trip() {
  return (
    <div className="trip">
      <h2>Podróże planowane</h2>
      <p>Ameryka Południowa i Północnaa</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Brazylia"
          text="Brazylia to kraj pełen niezapomnianych atrakcji, które przyciągają turystów z całego świata. Wspaniałe Wodospady Iguazú, jedna z największych atrakcji naturalnych na świecie, zachwycają swoją potęgą i pięknem, a Rio de Janeiro urzeka nie tylko słynną plażą Copacabana, ale i majestatycznym posągiem Chrystusa Odkupiciela na szczycie góry Corcovado. Dodatkowo, brazylijskie lasy deszczowe w Amazonii oferują unikalną możliwość odkrywania dzikiej przyrody i egzotycznej fauny."
        />
        <TripData
          image={Trip2}
          heading="Peru"
          text="Peru to kraj pełen tajemnic i zapierających dech w piersiach krajobrazów, który zachwyci każdego podróżnika. Możesz odkrywać starożytne ruiny Machu Picchu, spacerować po kolorowych uliczkach Cuzco lub podziwiać niezwykłe linie Nazca. Przyroda Amazonii i majestatyczne Andy czekają na Ciebie, oferując niezapomniane przygody. Pozwól sobie na kulinarną ucztę z tradycyjnymi peruwiańskimi potrawami i poczuj magię tego wyjątkowego miejsca!"
        />
        <TripData
          image={Trip3}
          heading="Meksyk"
          text="Meksyk to kraj pełen kontrastów, gdzie historia przeplata się z nowoczesnością, a krajobrazy zapierają dech w piersiach. Odkryj starożytne miasta Majów i Azteków, takie jak Chichén Itzá czy Teotihuacán, które przeniosą Cię w czasy wielkich cywilizacji. Zachwyć się białymi plażami w Cancún, turkusowymi wodami cenot i malowniczymi pustyniami. Meksykańska kuchnia, z tacos, enchiladami i aromatyczną tequilą, z pewnością dostarczy Ci niezapomnianych smakowych doznań."
        />
      </div>
    </div>
  );
}

export default Trip;
