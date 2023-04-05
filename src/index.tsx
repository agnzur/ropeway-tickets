import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./components/home/home.css";
import "./components/booking/booking.css";
import "./components/summary/summary.css";
import "./components/confirmation/confirmation.css";

const rootElement = document.getElementById("root");

if (rootElement === null) throw new Error("Couldn't find route");

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
