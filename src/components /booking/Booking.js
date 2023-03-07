import { CartArea } from "./CartArea";
import { TicketWidget } from "./TicketWidget";
import { getAvailableTickets } from "./Api";
import { useEffect, useState } from "react";

export const Booking = () => {
  const [tickets, setTickets] = useState([]);
  const [order, setOrder] = useState([
    {
      id: 1,
      quantity: 2,
      name: "Normalny w dwie strony",
      price: 60,
    },
    {
      id: 2,
      quantity: 3,
      name: "Normalny w jedną stronę",
      price: 30,
    },
  ]);

  const itemsQuantity = order.map((x) => x.quantity).reduce((a, c) => a + c, 0);

  useEffect(() => {
    getAvailableTickets().then((x) => setTickets(x));
  }, []);

  return (
    <div>
      <CartArea orderQuantity={itemsQuantity} />
      <div className="tickets-container">
        {tickets.map((x) => {
          return (
            <TicketWidget
              key={x.id}
              id={x.id}
              name={x.name}
              price={x.price}
              setOrder={setOrder}
              order={order}
            />
          );
        })}
      </div>
    </div>
  );
};
