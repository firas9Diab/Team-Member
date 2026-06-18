import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import useNavbar from "../Hooks/useNavbar";
import search from "../../Assets/search.svg";

const Navbar = () => {
  const { handleProfile, handleLogout } = useNavbar();

  return (
    <nav className={styles.navbar}>
      <div className={styles.items}>
        <Link to="/" className={styles.brand}>
          CRIO
        </Link>

        <div className={styles.search}>
          <img src={search} alt="search" />
          <input type="text" placeholder="Search Products Here" />
        </div>

        <div className={styles.rightItems}>
          <Link to="/" className={styles.rightLink}>
            Orders
          </Link>
          <div className={styles.profile}>
            <Link
              to="/settings"
              className={styles.rightLink}
              onClick={handleProfile}
            >
              Profile
            </Link>
            <p>|</p>
            <Link
              to="/login"
              className={styles.rightLink}
              onClick={handleLogout}
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
