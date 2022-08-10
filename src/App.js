import "./index.css";
import Encrypt from "./components/Encrypt";
import Decrypt from "./components/Decrypt";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/encrypt" element={<Encrypt type="encryption" />} />
        <Route path="/decrypt" element={<Decrypt type="decryption" />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
