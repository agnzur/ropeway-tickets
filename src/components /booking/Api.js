export function getAvailableTickets() {
  const availableTickets = [
    {
      id: 1,
      name: "Normalny w dwie strony",
      price: 60,
    },
    { id: 2, name: "Normalny w jedną stronę", cena: 30 },
    {
      id: 3,
      name: "Ulgowy w dwie strony",
      price: 48,
    },
    { id: 4, name: "Ulgowy w dwie strony", price: 24 },
    {
      id: 5,
      name: "Grupowy dla 6 osób w jedną stronę",
      price: 300,
    },
    { id: 4, name: "Ulgowy w dwie strony", price: 24 },
    {
      id: 5,
      name: "Grupowy dla 6 osób w dwie strony",
      price: 300,
    },
    { id: 6, name: "Grupowy dla 6 vosób w jedną stronę", price: 150 },
  ];
  return availableTickets;
}
