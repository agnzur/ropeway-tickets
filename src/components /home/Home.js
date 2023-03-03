import { GoToShopButton } from "./GoToShopButton";

export const Home = () => {
  return (
    <div>
      <div id="background-image">
        <GoToShopButton />
      </div>
      <div className="text-container">
        Kolejka Radość to atrakcja działająca w ramach Kolei Linowych. To
        doskonała całoroczna forma aktywnego spędzenia czasu w otoczeniu natury,
        z dala od codziennego zgiełku. Kolejka pokonuje trasę o długości 3km i
        wznosi się od 800 m n.p.m. na stacji początkowej do 1800 m n.p.m. na
        stacji końcowej. Trasa biegnie przez las aż do malowniczego łańcucha
        górskiego. Pasażerowie w trakcie podróży mają okazję do obcowania z
        sielksim krajobrazem, a także do obserwowania życia bogatej fauny i
        flory. Wśród mieszkańców trasy można wyróżnić m.in. płochacze halne,
        orły przednie, świstaki, rysie oraz lisy.
      </div>
    </div>
  );
};
