import { CartArea } from "./CartArea";
import { TicketWidget } from "./TicketWidget";
import { getAvailableTickets } from "./Api";
import { useEffect, useState } from "react";

export const Booking = () => {
  const [tickets, setTickets] = useState([]);
  const [order, setOrder] = useState([]);

  const itemsQuantity = order.length;

  const getOrderFromSessionStorage = () => {
    return JSON.parse(sessionStorage.getItem("order"));
  };

  useEffect(() => {
    const orderFromSS = getOrderFromSessionStorage();
    if (orderFromSS === null) return;
    setOrder(orderFromSS);
  }, []);

  useEffect(() => {
    getAvailableTickets().then((x) => setTickets(x));
  }, []);

  return (
    <div>
      <CartArea itemsQuantity={itemsQuantity} />
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