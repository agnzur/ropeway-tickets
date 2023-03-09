import { ConfirmButton } from "./ConfirmButton";
import { Inputs } from "./Inputs";
import { useState } from "react";

export const Summary = () => {
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

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
        <ConfirmButton date={setDate} email={email} />
      </div>
    </div>
  );
};
