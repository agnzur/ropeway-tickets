import { Inputs } from "./Inputs";

export const Summary = () => {
  const isButtonDisabled = () => {};

  return (
    <div>
      <div className="order-info-container">
        <div className="order-info">
          Podsumowanie:
          <div>{}</div>
        </div>
        <div className="order-info">
          Do zapłaty:
          <div> {} zł</div>
        </div>
      </div>
      <Inputs />
      <div className="button-container">
        <button id="confirm-button">Potwierdź</button>
      </div>
    </div>
  );
};
