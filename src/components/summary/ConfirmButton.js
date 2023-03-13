import { Link } from "react-router-dom";

export const ConfirmButton = ({ email, date }) => {
  const isButtonDisabled = () => {
    if (email.lenght < 3) return true;
    if (!email.includes("@")) return true;
    const małpa = email.indexOf("@");
    if (email.indexOf(".", małpa) === -1) return true;
    console.log(date);
    if (date < new Date()) return true;
  };

  return (
    <Link to="/confirmation">
      <button
        id="confirm-button"
        disabled={isButtonDisabled()}
        className={
          isButtonDisabled()
            ? "confirm-button-disabled"
            : "confirm-button-enabled"
        }
      >
        Potwierdź
      </button>
    </Link>
  );
};
