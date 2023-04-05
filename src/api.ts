import { Ticket } from "./components/booking/Api";

export async function placeOrder(order: Ticket[]): Promise<string> {
  // For now there is no api so order number is hardcoded.
  //   const response = await fetch("www.google.com", {
  //     method: "POST",
  //     body: JSON.stringify(order),
  //   });
  //   const data = await response.json();
  //   return data;

  return "asd123";
}
