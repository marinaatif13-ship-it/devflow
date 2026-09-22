import { FiGithub, FiHeart, FiCode } from "react-icons/fi";

function About() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <span className="eyebrow">About DevFlow</span>
          <h1>Simple tools. Open source. Community driven.</h1>
          <p>
            DevFlow is a learning-focused open-source project created to collect
            practical utilities in one fast and friendly place.
          </p>
        </div>

        <div className="about-grid">
          <div className="info-card">
            <FiCode size={28} />
            <h3>Built with React</h3>
            <p>
              The project uses React, React Router and plain CSS so contributors
              can understand the code without a large framework stack.
            </p>
          </div>

          <div className="info-card">
            <FiGithub size={28} />
            <h3>Made for GitHub</h3>
            <p>
              The structure is ready for issues, pull requests, new tools and
              community contributions.
            </p>
          </div>

          <div className="info-card">
            <FiHeart size={28} />
            <h3>Free for everyone</h3>
            <p>
              The goal is to keep useful developer utilities accessible without
              accounts or unnecessary friction.
            </p>
          </div>

          <div className="info-card">
            <h3>Roadmap</h3>
            <ul>
              <li>Regex Tester</li>
              <li>Base64 Encoder / Decoder</li>
              <li>URL Encoder / Decoder</li>
              <li>Markdown Previewer</li>
              <li>Image Compressor</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
