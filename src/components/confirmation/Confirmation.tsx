export const Confirmation = (): React.ReactElement => {
  const getOrderNumber = (): string => {
    const orderNumber = new URLSearchParams(window.location.search).get(
      "order"
    );

    if (orderNumber !== null) return orderNumber;

    throw new Error("Błąd! Brak numeru zamówienia.");
  };

  return (
    <div className="confirmation-container">
      <div id="booking-info">
        Numer Twojej rezerwacji to: {getOrderNumber()}
      </div>
    </div>
  );
};
