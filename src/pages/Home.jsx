import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckCircle, FiCode, FiGithub, FiShield, FiZap } from "react-icons/fi";

const tools = [
  {
    icon: <FiCode />,
    title: "JSON Formatter",
    text: "Format and validate JSON instantly with a clean developer-friendly interface.",
    path: "/tools/json-formatter"
  },
  {
    icon: <FiZap />,
    title: "Color Generator",
    text: "Generate beautiful colors and copy their HEX values for your next project.",
    path: "/tools/color-generator"
  },
  {
    icon: <FiShield />,
    title: "Password Generator",
    text: "Create strong random passwords with adjustable length and character types.",
    path: "/tools/password-generator"
  }
];

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="badge">🚀 Free developer toolkit</span>

            <h1>
              Build faster with
              <br />
              <span className="gradient-text">DevFlow.</span>
            </h1>

            <p>
              A collection of simple, fast and free tools for developers and
              designers. No account. No unnecessary complexity.
            </p>

            <div className="actions">
              <Link className="btn btn-primary" to="/tools">
                Explore Tools <FiArrowRight />
              </Link>
              <a className="btn btn-secondary" href="https://github.com/" target="_blank" rel="noreferrer">
                <FiGithub /> View on GitHub
              </a>
            </div>

            <div className="hero-points">
              <span><FiCheckCircle /> Free to use</span>
              <span><FiCheckCircle /> Open source</span>
              <span><FiCheckCircle /> No registration</span>
            </div>
          </div>

          <div className="code-window">
            <div className="window-bar">
              <span className="window-dot" />
              <span className="window-dot" />
              <span className="window-dot" />
            </div>

            <div className="code">
              <p className="code-line"><span className="c-purple">const</span> <span className="c-blue">developer</span> = {"{"}</p>
              <p className="code-line indent">tools: <span className="c-green">"DevFlow"</span>,</p>
              <p className="code-line indent">productivity: <span className="c-orange">true</span>,</p>
              <p className="code-line indent">openSource: <span className="c-orange">true</span></p>
              <p className="code-line">{"}"}</p>
              <br />
              <p className="code-line c-cyan">✓ Ready to build.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Popular tools</span>
            <h2>Everything you need for everyday development</h2>
            <p>Start with a few useful utilities and grow the toolkit with the community.</p>
          </div>

          <div className="tool-grid">
            {tools.map((tool) => (
              <Link to={tool.path} className="tool-card" key={tool.title}>
                <div className="tool-icon">{tool.icon}</div>
                <h3>{tool.title}</h3>
                <p>{tool.text}</p>
                <span className="tool-link">Open tool <FiArrowRight /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section community">
        <div className="container">
          <div className="community-box">
            <div>
              <span className="eyebrow" style={{ color: "white" }}>Open source</span>
              <h2>Built by developers, improved by the community.</h2>
              <p>
                DevFlow is designed to be easy to understand and easy to contribute to.
                Add a new utility, improve the UI, fix a bug, or suggest an idea.
              </p>
              <a className="btn btn-secondary" href="https://github.com/" target="_blank" rel="noreferrer">
                <FiGithub /> Contribute on GitHub
              </a>
            </div>
            <FiGithub className="community-icon" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
