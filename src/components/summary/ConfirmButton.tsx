import { useNavigate } from "react-router-dom";
import { placeOrder } from "../../api";
import { Ticket } from "../booking/Api";

interface ConfirmButtonProps {
  email: string;
  date: Date;
  order: Ticket[];
}

export const ConfirmButton = ({ email, date, order }: ConfirmButtonProps) => {
  const navigate = useNavigate();

  const isButtonDisabled = (): boolean => {
    if (email.length < 3) return true;
    if (!email.includes("@")) return true;
    const indexOfAt = email.indexOf("@");
    if (email.indexOf(".", indexOfAt) === -1) return true;
    if (date < new Date()) return true;
    return false;
  };

  async function getOrderNumber(): Promise<void> {
    const orderNumber = await placeOrder(order);
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
