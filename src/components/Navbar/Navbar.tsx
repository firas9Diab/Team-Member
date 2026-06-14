import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
const navigation = useNavigate()
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const goToSignOut = () => {
    localStorage.removeItem("token");
    navigation("/User/Login")
  };
  const gotosettings =() =>{
    navigation("/User/MyDetails")
  }

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.brand}>
        Home
      </Link>

      <div className={styles.userMenu} ref={menuRef}>
        <button
          className={styles.iconBtn}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="User menu"
        >
          <img src="/user.svg" alt="User" className={styles.userIcon} />
        </button>

        {menuOpen && (
          <ul className={styles.dropdown}>
            <li className={styles.dropdownItem} onClick={() => gotosettings()}>Profile</li>
            <li className={styles.dropdownItem} onClick={() => goToSignOut()}>
              Logout
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
