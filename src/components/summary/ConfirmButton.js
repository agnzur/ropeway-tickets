import { useNavigate } from "react-router-dom";
import { placeOrder } from "../../api";

export const ConfirmButton = ({ email, date }) => {
  const navigate = useNavigate();

  const isButtonDisabled = () => {
    if (email.lenght < 3) return true;
    if (!email.includes("@")) return true;
    const indexOfAt = email.indexOf("@");
    if (email.indexOf(".", indexOfAt) === -1) return true;
    if (date < new Date()) return true;
  };

  async function getOrderNumber() {
    const orderNumber = await placeOrder();
    navigate(`/confirmation?order=${orderNumber}`);
  }

  return (
    <button
      id="confirm-button"
      disabled={isButtonDisabled()}
      className={
        isButtonDisabled()
          ? "confirm-button-disabled"
          : "confirm-button-enabled"
      }
      onClick={getOrderNumber}
    >
      Potwierdź
    </button>
  );
};
