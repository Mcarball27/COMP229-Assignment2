import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section>
      <h1 className="section-title">Page Not Found</h1>

      <p className="lead">
        The page you're looking for doesn't exist.
      </p>

      <Link to="/" className="btn">
        Back to Home
      </Link>
    </section>
  );
}