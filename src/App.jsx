import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import BasicEdition from "./pages/BasicEdition";
import RetroEditionPage from "./pages/RetroEditionPage"
import FrozenEdition from "./pages/FrozenEdition";
import SmoothieEdition from "./pages/SmoothieEdition";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/basic-edition" element={<BasicEdition />} />
        <Route path="/retro-edition" element={<RetroEditionPage />} />
        <Route path="/frozen-edition" element={<FrozenEdition />} />
        <Route path="/smoothie-edition" element={<SmoothieEdition />} />
      </Routes>
    </Router>
  );
}

export default App;
