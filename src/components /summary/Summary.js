import { ConfirmButton } from "./ConfirmButton";
import { Inputs } from "./Inputs";
import { useState } from "react";

export const Summary = ({ order }) => {
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + 1);
    return tomorrow;
  };

  const orderDetails = order.map((x, i) => (
    <div key={i}>
      {x.name} {x.price} {"zł"}
    </div>
  ));

  const totalSum = order.reduce((a, c) => a + c.price, 0);
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(getTomorrowDate());

  return (
    <div>
      <div className="order-info-container">
        <div>
          <div> Podsumowanie:</div>
          <div>{orderDetails}</div>
        </div>
        <div>
          Do zapłaty:
          <div> {totalSum} zł</div>
        </div>
      </div>
      <Inputs date={date} setDate={setDate} email={email} setEmail={setEmail} />
      <div className="button-container">
        <ConfirmButton date={date} email={email} />
      </div>
    </div>
  );
};
