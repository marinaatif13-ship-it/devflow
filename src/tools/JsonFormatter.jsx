import { useState } from "react";
import { FiCopy, FiRefreshCw } from "react-icons/fi";

const example = `{
  "name": "DevFlow",
  "type": "developer toolkit",
  "openSource": true
}`;

function JsonFormatter() {
  const [input, setInput] = useState(example);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const format = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch {
      setOutput("");
      setError("Invalid JSON. Please check commas, quotes and brackets.");
    }
  };

  const minify = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch {
      setOutput("");
      setError("Invalid JSON. Please check your input.");
    }
  };

  const copy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
  };

  const reset = () => {
    setInput(example);
    setOutput("");
    setError("");
  };

  return (
    <div className="page">
      <div className="container tool-page">
        <div className="page-header">
          <span className="eyebrow">Tool</span>
          <h1>JSON Formatter</h1>
          <p>Format, validate and minify JSON directly in your browser.</p>
        </div>

        <div className="tool-box">
          <textarea value={input} onChange={(e) => setInput(e.target.value)} />

          <div className="tool-row">
            <button className="btn btn-primary" onClick={format}>Format JSON</button>
            <button className="btn btn-secondary" onClick={minify}>Minify</button>
            <button className="btn btn-secondary" onClick={reset}><FiRefreshCw /> Reset</button>
          </div>

          {error && <div className="error">{error}</div>}

          {output && (
            <div className="result">
              <div className="tool-row" style={{ marginTop: 0, marginBottom: 12 }}>
                <button className="btn btn-secondary" onClick={copy}><FiCopy /> Copy</button>
              </div>
              {output}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default JsonFormatter;
