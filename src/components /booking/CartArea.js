export const CartArea = ({ orderQuantity: itemsQuantity }) => {
  return (
    <div className="cart-area-container">
      <img
        src="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/null/external-cart-retail-solid-solidglyph-m-oki-orlando.png"
        id="cart-icon"
      />
      <div id="number-of-cart-items">{itemsQuantity}</div>
      <button id="book-button">Rezerwuj</button>
    </div>
  );
};
