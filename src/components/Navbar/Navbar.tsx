import styles from "./Navbar.module.scss";
import useNavbar from "./useNavbar";
import Search from "../../../public/icons/Search.svg";
import type { INavbar } from "../../Interfaces/CommonInterfaces";

const Navbar = ({ search, setSearch }: INavbar) => {
  const { token, handleNavigate } = useNavbar();

  return (
    <div className={styles.header}>
      <div className={styles.headerLogo} onClick={() => handleNavigate("home")}>
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
        <div className={styles.cartLink} onClick={() => handleNavigate("cart")}>
          Cart
        </div>
        <div
          className={styles.ordersLink}
          onClick={() => handleNavigate("orders")}
        >
          Orders
        </div>
        {!token ? (
          <div className={styles.authLinks}>
            <span
              className={styles.authLink}
              onClick={() => handleNavigate("login")}
            >
              Login In
            </span>
            <span>|</span>
            <span
              className={styles.authLink}
              onClick={() => handleNavigate("signup")}
            >
              Sign up
            </span>
          </div>
        ) : (
          <div className={styles.authLinks}>
            <span
              className={styles.authLink}
              onClick={() => handleNavigate("settings")}
            >
              Profile
            </span>
            <span>|</span>
            <span
              className={styles.authLink}
              onClick={() => handleNavigate("signOut")}
            >
              Logout
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
