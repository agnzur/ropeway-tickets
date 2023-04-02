import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Topbar } from "./components/Topbar";
import { Footer } from "./components/Footer";
import { Booking } from "./components/booking/Booking";
import { Summary } from "./components/summary/Summary";
import { Confirmation } from "./components/confirmation/Confirmation";

function App(): React.ReactElement {
  return (
    <div>
      <Topbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
