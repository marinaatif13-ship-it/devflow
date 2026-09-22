import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Tools from "./pages/Tools.jsx";
import About from "./pages/About.jsx";
import JsonFormatter from "./tools/JsonFormatter.jsx";
import ColorGenerator from "./tools/ColorGenerator.jsx";
import PasswordGenerator from "./tools/PasswordGenerator.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/json-formatter" element={<JsonFormatter />} />
          <Route path="/tools/color-generator" element={<ColorGenerator />} />
          <Route path="/tools/password-generator" element={<PasswordGenerator />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>DevFlow</strong>
            <span> — simple tools for better development.</span>
          </div>
          <span>Open Source · 2026</span>
        </div>
      </footer>
    </div>
  );
}

export default App;


