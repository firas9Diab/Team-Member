import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const useNavbar = () => {
  const token = localStorage.getItem("token");
  const navigation = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const goToSignOut = () => {
    localStorage.removeItem("token");
    setMenuOpen(false);
    navigation("/User/Login");
  };

  const goToHome = () => {
    navigation("/");
  };


  const goToSettings = () => {
    setMenuOpen(false);
    navigation("/User/Settings");
  };

  const goToSignup = () => {
    navigation("/User/SignUp");
  };

  const goToLogin = () => {
    navigation("/User/Login");
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    token,
    goToSignOut,
    goToSettings,
    goToSignup,
    goToLogin,
    goToHome,
    menuOpen,
    setMenuOpen,
    menuRef,
  };
};

export default useNavbar;
