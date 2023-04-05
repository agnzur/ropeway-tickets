interface InputsProps {
  email: string;
  setEmail: (email: string) => void;
  date: Date;
  setDate: (date: Date) => void;
}

export const Inputs = ({ email, setEmail, date, setDate }: InputsProps) => {
  const isoDate = date.toISOString();
  const newDate = isoDate.substring(0, isoDate.indexOf("T"));

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const stringDate = e.target.value;
    const date = new Date(stringDate);
    setDate(date);
  };

  return (
    <div className="grid-container">
      <label htmlFor="email-input" className="input-label">
        Wpisz swój e-mail
      </label>
      <input
        id="email-input"
        className="client-input"
        placeholder="e-mail"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <label htmlFor="date-input" className="input-label">
        Wybierz datę rezerwacji
      </label>
      <input
        id="date-input"
        className="client-input"
        type="date"
        value={newDate}
        onChange={handleDateChange}
      ></input>
    </div>
  );
};
