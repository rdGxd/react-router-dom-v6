import { Link } from "react-router-dom";
import "./styles.css";

export const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          {/* Use o <a></a> quando quiser da um reload full na página */}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/posts/10">Post 10</Link>
        </li>
        <li>
          <Link to="/redirect">Redirect</Link>
        </li>
      </ul>
    </nav>
  );
};
