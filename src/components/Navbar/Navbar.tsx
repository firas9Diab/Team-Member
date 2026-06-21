import styles from "./Navbar.module.scss";
import useNavbar from "./useNavbar";
import Search from "../../../public/Icons/Search.svg";

const Navbar = () => {
  const {
    token,
    goToSignOut,
    goToSettings,
    goToSignup,
    goToLogin,
    setMenuOpen,
    goToHome,
    menuOpen,
    menuRef,
  } = useNavbar();

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
          placeholder="Search Products Here"
          className={styles.search}
        />
      </div>

      <div className={styles.navordersandauthentication}>
        <div className={styles.navorders}>Orders</div>

        {!token ? (
          <div className={styles.authentication}>
            <span onClick={goToSignup}>Sign up</span>
            <span>|</span>
            <span onClick={goToLogin}>Login In</span>
          </div>
        ) : (
          <div className={styles.usermenu} ref={menuRef}>
            <button
              className={styles.iconbtn}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="User menu"
            >
              <img src="/user.svg" alt="User" className={styles.usericon} />
            </button>

            {menuOpen && (
              <ul className={styles.dropdown}>
                <li className={styles.dropdownitem} onClick={goToSettings}>
                  Profile
                </li>

                <li className={styles.dropdownitem} onClick={goToSignOut}>
                  Logout
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
