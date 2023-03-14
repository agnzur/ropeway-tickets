export const Confirmation = () => {
  const getOrderNumber = () => {
    const orderNumber = new URLSearchParams(window.location.search).get(
      "order"
    );
    return orderNumber;
  };

  return (
    <div className="confirmation-container">
      <div id="booking-info">
        Numer Twojej rezerwacji to: {getOrderNumber()}
      </div>
    </div>
  );
};
