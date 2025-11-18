import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logbook from "./pages/Logbook";
import Foundations from "./pages/Foundations";
import Lore from "./pages/Lore";            // ← IMPORT LORE PAGE
import Map from "./pages/Map";
import MainNav from "./components/MainNav";
import { LayoutProvider } from "./context/LayoutContext";

function App() {
  return (
    <Router>
      <LayoutProvider>
        <div className="min-h-screen relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logbook" element={<Logbook />} />
            <Route path="/foundations" element={<Foundations />} />

            {/* ➜ NEW ROUTE FOR LORE PAGE */}
            <Route path="/lore" element={<Lore />} />

            {/* ➜ NEW ROUTE FOR MAP PAGE */}
            <Route path="/map" element={<Map />} />

          </Routes>

          <MainNav />
        </div>
      </LayoutProvider>
    </Router>
  );
}

export default App;


