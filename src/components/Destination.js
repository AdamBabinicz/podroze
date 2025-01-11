import Mountain1 from "../assets/armenia/26.avif";
import Architecture from "../assets/armenia/29.avif";
import Bay from "../assets/wietnam/31.avif";
import Bay1 from "../assets/kambodza/14.avif";
import Aloes from "../assets/afryka/32.avif";
import Lion from "../assets/afryka/31.avif";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h2>Nasze podróże na antypody</h2>
      <p>Azja Zachodnia, Azja Południowo-Wschodnia, Afryka</p>
      <DestinationData
        className="first-des"
        heading="Armenia"
        text="Podróżowanie do Armenii to prawdziwa przygoda, która łączy unikalne doświadczenia kulturowe, fascynującą historię i&nbsp;zapierające dech w&nbsp;piersiach krajobrazy.
        Armenia to kraj pełen starożytnych tradycji i&nbsp;mistycyzmu. Z&nbsp;jej górami, malowniczymi jeziorami i&nbsp;historycznymi klasztorami, Armenia kusi podróżników, którzy szukają spokoju oraz duchowego wymiaru w&nbsp;podróży."
        text1="Klasztory, jak Geghard czy Khor Virap, oferują nie tylko niezapomniane widoki, ale także możliwość zanurzenia się w&nbsp;kulturze i&nbsp;religii tego kraju. Jezioro Sevan to kolejne miejsce, które urzeka swoją spokojną taflą wody otoczoną górskimi szczytami. Armenia to również kraj wina, z&nbsp;długą tradycją produkcji tego trunku, co czyni podróż jeszcze bardziej wyjątkową.
"
        img1={Mountain1}
        img2={Architecture}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Wietnam, Kambodża"
        text="Podróże do Wietnamu i&nbsp;Kambodży to wyjątkowa okazja, by zanurzyć się w&nbsp;bogatej historii, niezwykłej kulturze i&nbsp;zapierających dech w&nbsp;piersiach krajobrazach Azji Południowo-Wschodniej."
        text1="Wietnam to kraj, który łączy nowoczesność z&nbsp;tradycją. Turyści mogą odkrywać zarówno tętniące życiem miasta, jak Ho Chi Minh City (dawniej Sajgon), jak i&nbsp;spokojniejsze, malownicze wioski nad Zatoką Ha Long, której majestatyczne formacje skalne i&nbsp;turkusowe wody przyciągają podróżników z&nbsp;całego świata. Wietnam to także kraj pełen historii – od Hanoi, z&nbsp;jego kolonialnymi budynkami, po Miasto Hue, gdzie zachowały się wspaniałe cesarskie pałace i&nbsp;grobowce."
        text2="Kambodża natomiast kusi swoją tajemniczością i&nbsp;niesamowitymi zabytkami, w&nbsp;szczególności kompleksami świątynnymi w&nbsp;Angkor. Angkor Wat, jeden z&nbsp;największych religijnych kompleksów na świecie, to nie tylko imponująca budowla, ale i&nbsp;świadectwo dawnej świetności imperium Khmerów. W&nbsp;Kambodży można poczuć prawdziwy duch odkrywcy, zwiedzając porośnięte dżunglą ruiny, świątynie i&nbsp;posągi, które wciąż kryją niezliczone historie. Kambodża to również kraj o&nbsp;pięknych plażach, szczególnie na wyspach takich jak Koh Rong, które oferują idylliczne widoki i&nbsp;spokój.
        Oba te kraje oferują niezwykłe doświadczenia – od wietnamskich zatok i&nbsp;tętniących miast, po kambodżańskie świątynie i&nbsp;wyspy."
        img1={Bay}
        img2={Bay1}
      />
      <DestinationData
        className="first-des"
        heading="RPA"
        text="Republika Południowej Afryki (RPA) to kraj pełen egzotyki, który oferuje podróżnikom niepowtarzalne doświadczenia z&nbsp;zakresu przyrody, kultury i&nbsp;historii. To miejsce, gdzie spotykają się różne światy – od dzikich, pustynnych krajobrazów po tropikalne plaże i&nbsp;gęste lasy, a&nbsp;także od nowoczesnych miast po tradycyjne wioski, które zachowały swoje korzenie."
        text1="Egzotyczna przyroda RPA to jeden z&nbsp;głównych powodów, dla których warto odwiedzić ten kraj. Park Narodowy Krugera to prawdziwa perła afrykańskiego safari, gdzie można zobaczyć „Wielką Piątkę” – lwy, słonie, nosorożce, bawoły i&nbsp;lamparty. Tylko w&nbsp;RPA można doświadczyć dzikiej Afryki w&nbsp;jej naturalnym środowisku. Poza tym, RPA oferuje też malownicze krajobrazy górskie, jak Góry Smocze, oraz niezwykle piękne wybrzeża, w&nbsp;tym Plażę Boulders, gdzie można zobaczyć kolonie pingwinów."
        text2="RPA to także kraj, który łączy bogatą historię i&nbsp;kulturę. Odważna przeszłość związana z&nbsp;apartheidem, którą upamiętnia Muzeum Apartheidu w&nbsp;Johannesburgu, jest świadectwem walki o&nbsp;wolność i&nbsp;równość. Kapsztad, z&nbsp;jego zapierającą dech w&nbsp;piersiach scenerią, oferuje turystom wspaniałe widoki z&nbsp;Table Mountain oraz&nbsp;bogatą ofertę kulturową – od galerii sztuki po tradycyjne wioski, w&nbsp;których można poczuć prawdziwy afrykański klimat."
        img1={Aloes}
        img2={Lion}
      />
    </div>
  );
};

export default Destination;
