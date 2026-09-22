import { useState } from "react";
import { FiCopy, FiRefreshCw } from "react-icons/fi";

function randomHex() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

function ColorGenerator() {
  const [color, setColor] = useState(randomHex());

  const generate = () => setColor(randomHex());

  const copy = async () => {
    await navigator.clipboard.writeText(color.toUpperCase());
  };

  return (
    <div className="page">
      <div className="container tool-page">
        <div className="page-header">
          <span className="eyebrow">Tool</span>
          <h1>Color Generator</h1>
          <p>Generate a random HEX color and copy it with one click.</p>
        </div>

        <div className="tool-box">
          <div className="color-preview" style={{ background: color }}>
            <span className="color-code">{color.toUpperCase()}</span>
          </div>

          <div className="tool-row">
            <button className="btn btn-primary" onClick={generate}>
              <FiRefreshCw /> Generate Color
            </button>
            <button className="btn btn-secondary" onClick={copy}>
              <FiCopy /> Copy HEX
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorGenerator;
