import { CartArea } from "./CartArea";
import { TicketWidget } from "./TicketWidget";
import { getAvailableTickets } from "./Api";
import { useEffect, useState } from "react";
import { Ticket } from "./Api";

export const Booking = () => {
  const [availableTickets, setAvailableTickets] = useState<Ticket[]>([]);
  const [order, setOrder] = useState<Ticket[]>([]);

  const itemsQuantity: number = order.length;

  const getOrderFromSessionStorage = (): Ticket[] => {
    const orderString = sessionStorage.getItem("order");
    if (orderString === null) return [];
    return JSON.parse(orderString);
  };

  useEffect(() => {
    const orderFromSS = getOrderFromSessionStorage();
    if (orderFromSS === null) return;
    setOrder(orderFromSS);
  }, []);

  useEffect(() => {
    getAvailableTickets().then((x) => setAvailableTickets(x));
  }, []);

  return (
    <div>
      <CartArea itemsQuantity={itemsQuantity} />
      <div className="tickets-container">
        {availableTickets.map((x) => {
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
