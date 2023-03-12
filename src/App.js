import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Home } from "./components /home/Home";
import { Topbar } from "./components /Topbar";
import { Footer } from "./components /Footer";
import { Booking } from "./components /booking/Booking";
import { Summary } from "./components /summary/Summary";
import { Confirmation } from "./components /confirmation/Confirmation";

function App() {
  const [order, setOrder] = useState([]);
  return (
    <div>
      <Topbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/booking"
            element={<Booking order={order} setOrder={setOrder} />}
          />
          <Route path="/summary" element={<Summary order={order} />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
