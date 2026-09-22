import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container not-found">
      <h1>404</h1>
      <p>We couldn't find that page.</p>
      <Link to="/" className="btn btn-primary">Back Home</Link>
    </div>
  );
}

export default NotFound;
