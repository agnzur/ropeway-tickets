import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components /home/Home";
import { Topbar } from "./components /Topbar";
import { Footer } from "./components /Footer";

function App() {
  return (
    <div>
      <Topbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
