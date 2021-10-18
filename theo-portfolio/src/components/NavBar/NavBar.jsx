import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="Navbar">
        <div className="Theodore">
          <h1 className="Theodore-Heading">Theodore Chang</h1>
        </div>
        <div className="NavLink">
          <Link id="NavLink" to="/">
            About
          </Link>
          <Link id="NavLink" to="/projects">
            Projects
          </Link>
          <Link id="NavLink" to="/contacts">
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
