import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Link className={styles.link} to="newDogForm">
        New Dog
      </Link>
    </nav>
  );
}

export default NavBar;
