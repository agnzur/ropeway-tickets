import { CartArea } from "./CartArea";
import { TicketsGrid } from "./TicketsGrid";
import { getAvailableTickets } from "./Api";

export const Booking = () => {
  return (
    <div>
      <CartArea />
      <TicketsGrid />
    </div>
  );
};
