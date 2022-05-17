import { Link } from 'react-router-dom';

function NotFoundScreen():JSX.Element {
  return (
    <div>
      Page not found!
      <Link to="/">Home</Link>
    </div>
  );
}

export default NotFoundScreen;
