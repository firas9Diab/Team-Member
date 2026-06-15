import { useNavigate } from "react-router-dom";

const useNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleProfile = () => {
    navigate("/settings");
  };

  return {
    handleProfile,
    handleLogout,
  };
};

export default useNavbar;
