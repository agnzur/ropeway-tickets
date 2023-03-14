import { ConfirmButton } from "./ConfirmButton";
import { Inputs } from "./Inputs";
import { useEffect, useState } from "react";

export const Summary = () => {
  const [orderFromSS, setOrderFromSS] = useState([]);

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + 1);
    return tomorrow;
  };

  const getOrderFromSessionStorage = () => {
    return JSON.parse(sessionStorage.getItem("order"));
  };

  useEffect(() => setOrderFromSS(getOrderFromSessionStorage()), []);

  const totalSum = orderFromSS.reduce((a, c) => a + c.price, 0);
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(getTomorrowDate());

  return (
    <div>
      <div id="summary-heading">Podsumowanie:</div>
      <div className="summary-container">
        <div className="details-container">
          <div className="info-heading">Twoje bilety:</div>
          {orderFromSS.map((x, i) => (
            <div key={i} className="order-details">
              {x.name} {x.price} {"zł"}
            </div>
          ))}
        </div>
        <div className="details-container">
          <div className="info-heading">Do zapłaty:</div>
          <div className="order-details"> {totalSum} zł</div>
        </div>
      </div>
      <Inputs date={date} setDate={setDate} email={email} setEmail={setEmail} />
      <div className="button-container">
        <ConfirmButton date={date} email={email} />
      </div>
    </div>
  );
};
