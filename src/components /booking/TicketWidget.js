export const TicketWidget = ({ id, name, price, setOrder, order }) => {
  const quantity = order.find((x) => x.id === id)?.quantity ?? 0;

  const addTicket = () => {
    let newOrder;
    if (quantity === 0) {
      newOrder = [
        ...order,
        {
          id: id,
          name: name,
          price: price,
          quantity: quantity + 1,
        },
      ];
    } else {
      newOrder = order.map((x) => {
        if (x.id === id) {
          return { id: id, name: name, price: price, quantity: x.quantity + 1 };
        }
        return x;
      });
    }
    setOrder(newOrder);
  };

  return (
    <div className="ticket-widget">
      <div className="ticket-type">
        {name}
        <div className="ticket-price">{price} zł</div>
      </div>
      <div className="add-button-container">
        <button className="descrease-button add-button">-</button>
        {quantity}
        <button className="increase-button add-button" onClick={addTicket}>
          +
        </button>
      </div>
    </div>
  );
};
