import { Link } from "react-router-dom";

interface GoToSummaryButtonProps {
  itemsQuantity: number;
}

export const GoToSummaryButton = ({
  itemsQuantity,
}: GoToSummaryButtonProps) => {
  const isButtonDisabled = () => {
    return itemsQuantity === 0;
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
