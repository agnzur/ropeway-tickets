export const TicketsGrid = ({ name, price }) => {
  return (
    <div className="ticket-widget">
      <div className="ticket-type">
        {name}
        <div className="ticket-price">{price} zł</div>
      </div>
      <div className="add-button-container">
        <button className="descrease-button add-button">-</button>0
        <button className="increase-button add-button">+</button>
      </div>
    </div>
  );
};
