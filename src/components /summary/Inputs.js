export const Inputs = ({ email, setEmail, date, setDate }) => {
  return (
    <div>
      <div className="input-container">
        <label htmlFor="email-input">Wpisz swój e-mail</label>
        <input
          id="email-input"
          className="client-input"
          placeholder="e-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
      </div>
      <div className="input-container">
        <label htmlFor="date-input">Wybierz datę rezerwacji</label>
        <input
          id="date-input"
          className="client-input"
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};
