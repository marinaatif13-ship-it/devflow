import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export default function ToolCard({ icon, title, description, path }) {
  return (
    <article className="tool-card">
      <div className="tool-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={path} className="tool-link">Open tool <FiArrowRight /></Link>
    </article>
  );
}
