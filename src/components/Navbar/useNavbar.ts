import { useNavigate } from "react-router-dom";

const useNavbar = () => {
  const token = localStorage.getItem("token");
  const navigation = useNavigate();

  const goToSignOut = () => {
    localStorage.removeItem("token");
    navigation("/User/Login");
  };

  const goToSettings = () => {
    navigation("/User/Settings");
  };

  const goToSignup = () => {
    navigation("/User/SignUp");
  };

  const goToLogin = () => {
    navigation("/User/Login");
  };

  const goToHome = () => {
    navigation("/");
  };

  return {
    token,
    goToSignOut,
    goToSettings,
    goToSignup,
    goToLogin,
    goToHome,
  };
};

export default useNavbar;
