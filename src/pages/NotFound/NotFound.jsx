import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <h2>
        <Link to="/">Go Home?</Link>
      </h2>
    </>
  );
}

export default NotFound;
