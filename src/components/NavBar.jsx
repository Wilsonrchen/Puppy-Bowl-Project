import { Link } from "react-router-dom";
import styles from "../styles/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="newDogForm">
        New Dog
      </Link>
    </nav>
  );
}

export default NavBar;
