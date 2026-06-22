import styles from "./Navbar.module.scss";
import useNavbar from "./useNavbar";
import Search from "../../../public/Icons/Search.svg";
import type { INavbar } from "../interface";

const Navbar = ({ search, setSearch }: INavbar) => {
  const { token, goToSignOut, goToSettings, goToSignup, goToLogin, goToHome } =
    useNavbar();

  return (
    <div className={styles.header}>
      <div className={styles.logoheader} onClick={goToHome}>
        CRIO
      </div>

      <div className={styles.searchinput}>
        <button className={styles.button}>
          <img src={Search} alt="Search" />
        </button>

        <input
          type="text"
          value={search ?? ""}
          onChange={(e) => setSearch?.(e.target.value)}
          placeholder="Search Products Here"
          className={styles.search}
        />
      </div>

      <div className={styles.navordersandauthentication}>
        <div className={styles.navorders}>Orders</div>

        {!token ? (
          <div className={styles.authentication}>
            <span className={styles.clickauth} onClick={goToLogin}>
              Login In
            </span>
            <span>|</span>
            <span className={styles.clickauth} onClick={goToSignup}>
              Sign up
            </span>
          </div>
        ) : (
          <div className={styles.authentication}>
            <span className={styles.clickauth} onClick={goToSettings}>
              Profile
            </span>
            <span>|</span>
            <span className={styles.clickauth} onClick={goToSignOut}>
              Logout
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
