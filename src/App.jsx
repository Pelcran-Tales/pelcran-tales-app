// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Logbook from "./pages/Logbook";
import Foundations from "./pages/Foundations";
import Lore from "./pages/Lore";
import Map from "./pages/Map";
import Characters from "./pages/Characters";
import Disgrace from "./pages/Disgrace";
import Alaricsoath from "./pages/Alaricsoath";
import Sunkenchest from "./pages/Sunkenchest";

import MainNav from "./components/MainNav";
import ScrollToTop from "./components/ScrollToTop";
import { LayoutProvider } from "./context/LayoutContext";

// Auto-import all log entry pages
// Vite's import.meta.glob automatically loads all .jsx files
const logPages = import.meta.glob("./pages/Log-Entries/*.jsx", {
  eager: true,     // Load immediately
  import: "default" // Use default export
});

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LayoutProvider>
        <div className="min-h-screen relative">
          <Routes>

            {/* ---- Static Routes ---- */}
            <Route path="/" element={<Home />} />
            <Route path="/logbook" element={<Logbook />} />
            <Route path="/foundations" element={<Foundations />} />
            <Route path="/lore" element={<Lore />} />
            <Route path="/map" element={<Map />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/disgrace" element={<Disgrace />} />
            <Route path="/alaricsoath" element={<Alaricsoath />} />
            <Route path="/sunkenchest" element={<Sunkenchest />} />

            {/* ---- Auto-generated Log Entry Routes ---- */}
            {Object.entries(logPages).map(([path, Component]) => {
              // Extract filename only (e.g., "Log-entry1")
              const fileName = path.split("/").pop().replace(".jsx", "");

              // Create route URL: "/log-entry1"
              const routePath = `/${fileName.toLowerCase()}`;

              return (
                <Route
                  key={routePath}
                  path={routePath}
                  element={<Component />}
                />
              );
            })}

          </Routes>

          <MainNav />
        </div>
      </LayoutProvider>
    </Router>
  );
}

export default App;
