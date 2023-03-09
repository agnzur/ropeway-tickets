export const Inputs = () => {
  return (
    <div>
      <div className="input-container">
        <label for="email-input">Wpisz swój e-mail</label>
        <input
          id="email-input"
          className="client-input"
          placeholder="e-mail"
        ></input>{" "}
      </div>
      <div className="input-container">
        <label for="date-input">Wybierz datę rezerwacji</label>
        <input id="date-input" className="client-input" type="date"></input>
      </div>
    </div>
  );
};
