import { CartArea } from "./CartArea";
import { TicketsGrid } from "./TicketsGrid";
import { getAvailableTickets } from "./Api";
import { useEffect, useState } from "react";

export const Booking = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getAvailableTickets().then((x) => setTickets(x));
  }, []);

  return (
    <div>
      <CartArea />
      <div className="tickets-container">
        {tickets.map((x) => {
          return <TicketsGrid key={x.id} name={x.name} price={x.price} />;
        })}
      </div>
    </div>
  );
};
