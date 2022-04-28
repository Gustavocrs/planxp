import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./assets/layout/Navbar";
import QuemSomos from "./pages/quemsomos/";
import OqueFazemos from "./pages/oquefazemos/";
import PlanNews from "./pages/plannews/";
import NossosClientes from "./pages/nossosclientes/";
import Contato from "./pages/contato/";

function App() {
  return (
    <nav className="principal">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<QuemSomos />} />
          <Route exact path="/quemsomos" element={<QuemSomos />} />
          <Route exact path="/oquefazemos" element={<OqueFazemos />} />
          <Route exact path="/plannews" element={<PlanNews />} />
          <Route exact path="/nossosclientes" element={<NossosClientes />} />
          <Route exact path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </nav>
  );
}

export default App;
