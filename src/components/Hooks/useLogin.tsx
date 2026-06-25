import { useState } from "react";
import { useNavigate } from "react-router-dom";
import requestBuilder from "../utility/requestBuilder";

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
      const response = await requestBuilder({
        url: "http://localhost:3000/auth/login",
        method: "POST",
        data: {
          email,
          password,
        },
      });

      if (response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
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
