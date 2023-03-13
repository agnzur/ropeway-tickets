import { useEffect } from "react";
import { Link } from "react-router-dom";

export const GoToSummaryButton = ({ itemsQuantity, order }) => {
  const isButtonDisabled = () => {
    if (itemsQuantity === 0) return true;
  };

  const setOrderToSessionStorage = () => {
    sessionStorage.setItem("order", JSON.stringify(order));
  };

  return (
    <Link to="/summary">
      <button
        id="book-button"
        className={
          isButtonDisabled() ? "book-button-disabled" : "book-button-enabled"
        }
        disabled={isButtonDisabled()}
        onClick={setOrderToSessionStorage}
      >
        Rezerwuj
      </button>
    </Link>
  );
};
