import { BrowserRouter, Routes, Route } from "react-router-dom";

import HuntPage from "./pages/HuntPage";
import FinalPage from "./pages/FinalPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/hunt/:clueId"
          element={<HuntPage />}
        />

        <Route
          path="/final"
          element={<FinalPage />}
        />

        <Route
          path="*"
          element={
            <div className="page">
              <div className="container">
                <h1>⚡ BTK KINCSVADÁSZAT ⚡</h1>
                <p>
                  Olvasd be az első QR-kódot,
                  hogy elkezdődjön a játék!
                </p>
              </div>
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;