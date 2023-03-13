import { CartArea } from "./CartArea";
import { TicketWidget } from "./TicketWidget";
import { getAvailableTickets } from "./Api";
import { useEffect, useState } from "react";

export const Booking = () => {
  const [tickets, setTickets] = useState([]);
  const [order, setOrder] = useState([]);

  const getOrderFromSessionStorage = () => {
    return JSON.parse(sessionStorage.getItem("order"));
  };

  useEffect(() => {
    const orderFromSS = getOrderFromSessionStorage();
    if (orderFromSS === null) return;
    setOrder(orderFromSS);
  }, []);

  const itemsQuantity = order.length;

  useEffect(() => {
    getAvailableTickets().then((x) => setTickets(x));
  }, []);

  return (
    <div>
      <CartArea itemsQuantity={itemsQuantity} order={order} />
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
