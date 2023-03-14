import { Link } from "react-router-dom";

export const GoToSummaryButton = ({ itemsQuantity, order }) => {
  const isButtonDisabled = () => {
    if (itemsQuantity === 0) return true;
  };

  return (
    <Link to="/summary">
      <button
        id="book-button"
        className={
          isButtonDisabled() ? "book-button-disabled" : "book-button-enabled"
        }
        disabled={isButtonDisabled()}
      >
        Rezerwuj
      </button>
    </Link>
  );
};
