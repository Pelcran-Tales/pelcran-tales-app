import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logbook from "./pages/Logbook";
import Foundations from "./pages/Foundations";
import MainNav from "./components/MainNav";
import { LayoutProvider } from "./context/LayoutContext"; // make sure path is correct

function App() {
  return (
    <Router>
      <LayoutProvider>
        <div className="min-h-screen relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logbook" element={<Logbook />} />
            <Route path="/foundations" element={<Foundations />} />
          </Routes>

          <MainNav />
        </div>
      </LayoutProvider>
    </Router>
  );
}


export default App;

