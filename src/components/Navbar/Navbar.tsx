import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import useNavbar from "../Hooks/useNavbar";
import searchsvg from "../../Assets/searchsvg.svg";
import type { INavbar } from "../../interface/interface";

const Navbar = ({ search, handleSearchChange }: INavbar) => {
  const { handleProfile, handleLogout } = useNavbar();

  return (
    <nav className={styles.navbar}>
      <div className={styles.items}>
        <Link to="/" className={styles.brand}>
          CRIO
        </Link>

        <div className={styles.search}>
          <img src={searchsvg} alt="search" />
          <input
            type="text"
            placeholder="Search Products Here"
            value={search}
            onChange={(e) => {
              handleSearchChange(e.target.value);
            }}
          />
        </div>

        <div className={styles.rightItems}>
          <Link to="/Cart" className={styles.rightLink}>
            Cart
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
