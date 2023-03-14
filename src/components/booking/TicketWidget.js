export const TicketWidget = ({ id, name, price, setOrder, order }) => {
  const quantity = order.filter((x) => x.id === id).length;

  const setOrderToSessionStorage = (newOrder) => {
    return sessionStorage.setItem("order", JSON.stringify(newOrder));
  };

  const addTicket = () => {
    const newOrder = [...order];
    newOrder.push({ id, name, price });
    setOrder(newOrder);
    setOrderToSessionStorage(newOrder);
  };

  const removeTicket = () => {
    if (quantity === 0) return;
    const newOrder = [...order];
    const indexToRemove = newOrder.findIndex((x) => x.id === id);
    newOrder.splice(indexToRemove, 1);
    setOrder(newOrder);
    setOrderToSessionStorage(newOrder);
  };

  return (
    <div className="ticket-widget">
      <div className="ticket-type">
        {name}
        <div className="ticket-price">{price} zł</div>
      </div>
      <div className="ticket-button-container">
        <button className="ticket-button" onClick={removeTicket}>
          -
        </button>
        {quantity}
        <button className="ticket-button" onClick={addTicket}>
          +
        </button>
      </div>
    </div>
  );
};
