import styles from "./Navbar.module.scss";
import useNavbar from "./useNavbar";
import Search from "../../../public/Icons/Search.svg";
import type { INavbar } from "../interface";

const Navbar = ({ search, setSearch }: INavbar) => {
  const { token, goToSignOut, goToSettings, goToSignup, goToLogin, goToHome } =
    useNavbar();

  return (
    <div className={styles.header}>
      <div className={styles.headerLogo} onClick={goToHome}>
        CRIO
      </div>

      <div className={styles.searchBox}>
        <button className={styles.searchButton}>
          <img src={Search} alt="Search" />
        </button>

        <input
          type="text"
          value={search ?? ""}
          onChange={(e) => setSearch?.(e.target.value ?? "")}
          placeholder="Search Products Here"
          className={styles.searchInput}
        />
      </div>

      <div className={styles.headerActions}>
        <div className={styles.ordersLink}>Orders</div>

        {!token ? (
          <div className={styles.authLinks}>
            <span className={styles.authLink} onClick={goToLogin}>
              Login In
            </span>

            <span>|</span>

            <span className={styles.authLink} onClick={goToSignup}>
              Sign up
            </span>
          </div>
        ) : (
          <div className={styles.authLinks}>
            <span className={styles.authLink} onClick={goToSettings}>
              Profile
            </span>

            <span>|</span>

            <span className={styles.authLink} onClick={goToSignOut}>
              Logout
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
