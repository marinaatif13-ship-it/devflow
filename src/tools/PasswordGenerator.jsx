import { useMemo, useState } from "react";
import { FiCopy, FiRefreshCw } from "react-icons/fi";

function createPassword(length, options) {
  let chars = "";
  if (options.lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
  if (options.uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (options.numbers) chars += "0123456789";
  if (options.symbols) chars += "!@#$%^&*()_+-=[]{}";

  if (!chars) return "";

  const values = new Uint32Array(length);
  crypto.getRandomValues(values);

  return Array.from(values, (value) => chars[value % chars.length]).join("");
}

function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true
  });
  const [password, setPassword] = useState("");

  const generated = useMemo(() => {
    if (!password) return "";
    return password;
  }, [password]);

  const generate = () => {
    setPassword(createPassword(length, options));
  };

  const copy = async () => {
    if (generated) await navigator.clipboard.writeText(generated);
  };

  const toggle = (name) => {
    setOptions((current) => ({ ...current, [name]: !current[name] }));
  };

  return (
    <div className="page">
      <div className="container tool-page">
        <div className="page-header">
          <span className="eyebrow">Tool</span>
          <h1>Password Generator</h1>
          <p>Create strong random passwords with customizable character sets.</p>
        </div>

        <div className="tool-box">
          <label>
            Length: <strong>{length}</strong>
          </label>

          <input
            className="range"
            type="range"
            min="8"
            max="64"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />

          <div className="checkbox-row">
            {Object.entries({
              lowercase: "Lowercase",
              uppercase: "Uppercase",
              numbers: "Numbers",
              symbols: "Symbols"
            }).map(([key, label]) => (
              <label key={key}>
                <input
                  type="checkbox"
                  checked={options[key]}
                  onChange={() => toggle(key)}
                />
                {label}
              </label>
            ))}
          </div>

          <div className="tool-row">
            <button className="btn btn-primary" onClick={generate}>
              <FiRefreshCw /> Generate
            </button>
            <button className="btn btn-secondary" onClick={copy}>
              <FiCopy /> Copy
            </button>
          </div>

          {generated && (
            <div className="result">
              <div className="password-output">{generated}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
