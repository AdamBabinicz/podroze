import "./KontaktFormStyles.css";

function KontaktForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const imie = e.target[0].value;
    const email = e.target[1].value;
    const temat = e.target[2].value;
    const wiadomosc = e.target[3].value;

    if (imie && email && temat && wiadomosc) {
      const data = {
        imie,
        email,
        temat,
        wiadomosc,
      };

      // Przesłanie wiadomości
      const mailtoLink = `mailto:example@example.com?subject=${encodeURIComponent(
        temat
      )}&body=${encodeURIComponent(wiadomosc)}%0A%0AEmail: ${encodeURIComponent(
        email
      )}%0AImię i nazwisko: ${encodeURIComponent(imie)}`;

      window.location.href = mailtoLink;

      // Po wysłaniu czyszczenie pól
      e.target.reset();
    } else {
      alert("Proszę uzupełnić wszystkie pola");
    }
  };

  return (
    <div className="form-container">
      <h3>Wyślij wiadomość</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Imię i nazwisko" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Temat" required />
        <textarea placeholder="Wiadomość" rows="4" required></textarea>
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
}

export default KontaktForm;
