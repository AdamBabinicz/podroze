import React from "react";
import "./style.css";

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-content">
      <h2>Polityka Prywatności</h2>
      <p>
        Szanujemy Twoją prywatność i przykładamy dużą wagę do ochrony Twoich
        danych osobowych. Nasza Polityka Prywatności opisuje, jakie informacje
        zbieramy, w jaki sposób je wykorzystujemy, komu możemy je udostępniać
        oraz jakie masz prawa w związku z przetwarzaniem Twoich danych.
      </p>
      <h3>1. Jakie dane zbieramy?</h3>
      <p>
        Zbieramy tylko te dane, które są niezbędne do realizacji naszych usług,
        takie jak dane kontaktowe, dane związane z formularzami czy dane
        dotyczące korzystania z naszej strony internetowej.
      </p>
      <h3>2. Jak wykorzystujemy Twoje dane?</h3>
      <p>
        Twoje dane osobowe są wykorzystywane w celu realizacji usług, obsługi
        klienta, personalizacji treści, komunikacji oraz zapewnienia zgodności z
        obowiązującymi przepisami prawa.
      </p>
      <h3>3. Komu możemy udostępniać Twoje dane?</h3>
      <p>
        Twoje dane mogą być udostępniane naszym partnerom, dostawcom usług oraz
        innym stronom trzecim, jeżeli jest to konieczne do realizacji naszych
        zobowiązań.
      </p>
      <h3>4. Twoje prawa</h3>
      <p>
        Masz prawo dostępu do swoich danych, ich poprawiania, usunięcia, a także
        prawo do wycofania zgody na ich przetwarzanie. Możesz także zgłosić
        sprzeciw wobec przetwarzania danych.
      </p>
      <a href="/" className="return-home">
        Powrót do strony głównej
      </a>
    </div>
  );
}

export default PrivacyPolicy;
