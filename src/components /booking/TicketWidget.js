export const TicketWidget = ({ id, name, price, setOrder, order }) => {
  const quantity = order.find((x) => x.id === id)?.quantity ?? 0;

  return (
    <div className="ticket-widget">
      <div className="ticket-type">
        {name}
        <div className="ticket-price">{price} zł</div>
      </div>
      <div className="add-button-container">
        <button className="descrease-button add-button">-</button>
        {quantity}
        <button className="increase-button add-button">+</button>
      </div>
    </div>
  );
};
