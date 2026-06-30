import { useNavigate } from "react-router-dom";

type NavbarRoute =
  | "signOut"
  | "settings"
  | "signup"
  | "login"
  | "home"
  | "cart"
  | "orders";

const useNavbar = () => {
  const token = localStorage.getItem("token");
  const navigation = useNavigate();

  const handleNavigate = (route: NavbarRoute) => {
    switch (route) {
      case "signOut":
        localStorage.removeItem("token");
        navigation("/User/Login");
        break;

      case "settings":
        navigation("/User/Settings");
        break;

      case "signup":
        navigation("/User/SignUp");
        break;

      case "login":
        navigation("/User/Login");
        break;

      case "home":
        navigation("/");
        break;

      case "cart":
        navigation("/Cart");
        break;
      case "orders":
        navigation("/Orders");
        break;
      default:
        navigation("/");
        break;
    }
  };

  return {
    token,
    handleNavigate,
  };
};

export default useNavbar;
