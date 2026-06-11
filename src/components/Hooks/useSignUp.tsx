import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useSignUp = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [showMessage, setShowMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const isFormValid =
    fullName.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    confirmPassword.trim() !== "" &&
    phone.trim() !== "";

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleFullNameChange = (value: string) => {
    setFullName(value);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
  };

  const handlePhoneChange = (value: string) => {
    setPhone(value);
  };

  const signUp = async () => {
    if (password === confirmPassword) {
      setShowMessage("");

      try {
        const response = await axios.post("http://localhost:3000/auth/signup", {
          fullName,
          email,
          password,
          confirmPassword,
          phone,
        });
        if (response.data.data.accessToken) {
          localStorage.setItem("token", response.data.data.accessToken);
          navigate("/");
        }
      } catch (error: any) {
        console.log(error.response?.data);
        setError(error.response?.data?.errors || "Error occurred");
      }
    } else {
      setShowMessage("Passwords do not match");
    }
  };

  return {
    handleEmailChange,
    handlePasswordChange,
    handleFullNameChange,
    handleConfirmPasswordChange,
    handlePhoneChange,
    showMessage,
    error,
    signUp,
    isFormValid,
    navigate,
  };
};

export default useSignUp;
