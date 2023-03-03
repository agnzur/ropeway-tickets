import { Link } from "react-router-dom";

export const GoToShopButton = () => {
  return (
    <div className="button-container">
      <Link to="/shop">
        <button id="go-to-shop-button">Kup bilety</button>
      </Link>
    </div>
  );
};
