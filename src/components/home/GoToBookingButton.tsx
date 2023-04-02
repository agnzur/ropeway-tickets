import { Link } from "react-router-dom";

export const GoToBookingButton = (): React.ReactElement => {
  return (
    <div className="button-container">
      <Link to="/booking">
        <button id="go-to-booking-button">Rezerwuj bilety</button>
      </Link>
    </div>
  );
};
