import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        AI Mötesassistent
      </Link>

      <Link to="/" className="homeBtn">
        Hem
      </Link>
    </nav>
  );
}

export default Navbar;
