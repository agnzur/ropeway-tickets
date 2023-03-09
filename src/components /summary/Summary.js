import { ConfirmButton } from "./ConfirmButton";
import { Inputs } from "./Inputs";
import { useState } from "react";

export const Summary = () => {
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + 1);
    return tomorrow;
  };

  const [email, setEmail] = useState("");
  const [date, setDate] = useState(getTomorrowDate());

  return (
    <div>
      <div className="order-info-container">
        <div className="order-info">
          Podsumowanie:
          <div>{}</div>
        </div>
        <div className="order-info">
          Do zapłaty:
          <div> {} zł</div>
        </div>
      </div>
      <Inputs date={date} setDate={setDate} email={email} setEmail={setEmail} />
      <div className="button-container">
        <ConfirmButton date={date} email={email} />
      </div>
    </div>
  );
};
