import { Link } from "react-router-dom";
import { FiCode, FiZap, FiShield, FiArrowRight } from "react-icons/fi";

const tools = [
  {
    icon: <FiCode />,
    title: "JSON Formatter",
    description: "Format and validate JSON data.",
    path: "/tools/json-formatter"
  },
  {
    icon: <FiZap />,
    title: "Color Generator",
    description: "Generate random colors and copy HEX values.",
    path: "/tools/color-generator"
  },
  {
    icon: <FiShield />,
    title: "Password Generator",
    description: "Generate secure random passwords.",
    path: "/tools/password-generator"
  }
];

function Tools() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <span className="eyebrow">Toolkit</span>
          <h1>Developer Tools</h1>
          <p>Fast, focused utilities for common development tasks.</p>
        </div>

        <div className="tool-list">
          {tools.map((tool) => (
            <Link to={tool.path} className="tool-card" key={tool.title}>
              <div className="tool-icon">{tool.icon}</div>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
              <span className="tool-link">Use tool <FiArrowRight /></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tools;
