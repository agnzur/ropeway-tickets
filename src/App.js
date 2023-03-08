import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components /home/Home";
import { Topbar } from "./components /Topbar";
import { Footer } from "./components /Footer";
import { Booking } from "./components /booking/Booking";
import { Summary } from "./components /summary/Summary";

function App() {
  return (
    <div>
      <Topbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
