import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isFormValid = email.trim() && password.trim();

  const navigate = useNavigate();

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:3000/Auth/login", {
        email,
        password,
      });
      if (response.data.data.accessToken) {
        localStorage.setItem("token", response.data.data.accessToken);
        navigate("/");
      }
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return {
    handleEmailChange,
    handlePasswordChange,
    error,
    login,
    isFormValid,
    navigate,
  };
};

export default useLogin;
